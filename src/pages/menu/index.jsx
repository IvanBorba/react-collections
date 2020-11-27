import { Route, Switch, useHistory } from "react-router-dom";
import { Menu, Button } from "antd";
import React, { useState, useEffect } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import axios from "axios";
import RickList from "../../components/rick-list";
import RickFavList from "../../components/rick-fav-list";
import PokeList from "../../components/poke-list";
import PokeFavList from "../../components/poke-fav-list";
import LandingPage from "../landing-page";

const { SubMenu } = Menu;

const MainMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const [rickCharList, setRickCharList] = useState([]);
  const [rickUrl, setRickUrl] = useState(
    "https://rickandmortyapi.com/api/character/?page=1"
  );
  const [rickFav, setRickFav] = useState([]);

  const [pokeCharList, setPokeCharList] = useState([]);
  const [pokeFav, setPokeFav] = useState([]);

  const history = useHistory();

  const rickRequest = () => {
    axios.get(rickUrl).then((res) => {
      setRickCharList([...rickCharList, res.data.results]);
      setRickUrl(res.data.info.next);
    });
  };

  const firstPokeRequest = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=150").then((res) => {
      setPokeCharList(res.data.results);
    });
  };

  const imgPokeRequest = () => {
    if (pokeCharList.length === 150) {
      for (let i = 0; i < pokeCharList.length; i++) {
        let array = pokeCharList[i].url.split("/");
        let id = array[array.length - 2];
        setPokeCharList([
          ...pokeCharList,
          (pokeCharList[i] = {
            ...pokeCharList[i],
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          }),
        ]);
      }
      console.log(pokeCharList);
    }
  };

  useEffect(() => {
    rickRequest();
    imgPokeRequest();
  }, [rickUrl]);

  useEffect(() => {
    firstPokeRequest();
  }, []);

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          style={{ zIndex: "1", position: "absolute", maxWidth: "230px" }}
        >
          <SubMenu
            key="sub1"
            icon={
              <img
                alt="rickIcon"
                src="https://img.icons8.com/color/48/000000/morty-smith.png"
                style={{ width: "35px", marginRight: "30px" }}
              />
            }
            title="Rick e Morty"
          >
            <Menu.Item key="1" onClick={() => history.push("/rick-e-morty")}>
              Todos os personagens
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => history.push("/rick-e-morty/fav")}
            >
              Personagens favoritos
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={
              <img
                alt="rickIcon"
                src="https://www.flaticon.com/svg/static/icons/svg/188/188918.svg"
                style={{ width: "35px", marginRight: "30px" }}
              />
            }
            title="Pokemon"
          >
            <Menu.Item key="3" onClick={() => history.push("/pokemon")}>
              Todos os personagens
            </Menu.Item>
            <Menu.Item key="4" onClick={() => history.push("/pokemon/fav")}>
              Personagens favoritos
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <Switch>
        <Route exact path="/rick-e-morty">
          <RickList
            rickCharList={rickCharList}
            setRickFav={setRickFav}
            rickFav={rickFav}
          />
        </Route>
        <Route path="/rick-e-morty/fav">
          <RickFavList rickFav={rickFav} setRickFav={setRickFav} />
        </Route>
        <Route exact path={"/pokemon"}>
          <PokeList
            pokeCharList={pokeCharList}
            pokeFav={pokeFav}
            setPokeFav={setPokeFav}
          />
        </Route>
        <Route path={"/pokemon/fav"}>
          <PokeFavList pokeFav={pokeFav} setPokeFav={setPokeFav} />
        </Route>
        <Route>
          <LandingPage exact path="/" />
        </Route>
      </Switch>
    </>
  );
};

export default MainMenu;
