import { useDispatch, useSelector } from "react-redux";
import { projectActions } from "../../store/project/slices";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CoBlock } from "../../constructor/block";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProjectFullScreenPage = () => {
  const data = useSelector((state) => state.project.data);
  const { status } = useSelector((state) => state.project.getData);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (!status) {
      dispatch(projectActions.getData(id));
    }
    return () => {
      projectActions.resetData();
    };
  }, [id, dispatch, status]);

  const LinkGoHome = styled.div`
    width: 100%;
    height: 50px;
    background-color: #6f68ee;
    border: none;
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    padding: 8px 30px ;
    justify-content: space-between;

    & a {
      color: white;
    }

    & p {
      color: #f5f513;
    }
  `;

  return (
    data && (
      <div>
        <LinkGoHome>
          <Link to="/">⭠  Go to home page</Link>
          <p>This is the fullscreen version of progect</p>
        </LinkGoHome>

        {data.blocks.map((block) => (
          <CoBlock key={block.id} name={block.name} data={block.data} />
        ))}
      </div>
    )
  );
};
