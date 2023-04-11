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
    border: 1px solid;
    width: 100%;
    height: 70px;
    background-color: #6f9299;
    border: none;
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;
    padding: 10px 50px;
    justify-content: space-between;

    & a {
      background-color: #ffffff87;
      border-radius: 100px;
      padding: 4px;
    }
    & a:active{
      background-color: rgb(98, 133, 223);
      color: white;
    }
    & p{
      background-color: #0000007a;
      border-radius: 10px;
      padding: 10px;
      color: white;

    }
    
  `;

  return (
    data && (
      <div>
        <LinkGoHome>
          <Link to="/">⮪ Вернуться на главную страницу</Link>
          <p>This is the fullscreen version of progect</p>
        </LinkGoHome>

        {data.blocks.map((block) => (
          <CoBlock key={block.id} name={block.name} data={block.data} />
        ))}
      </div>
    )
  );
};
