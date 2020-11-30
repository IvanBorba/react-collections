import { Route, Switch, useHistory } from "react-router-dom";
import { Menu } from "antd";
import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import RickList from "../rick-list";
import RickFavList from "../rick-fav-list";
import PokeList from "../poke-list";
import PokeFavList from "../poke-fav-list";
import LandingPage from "../landing-page";
import Graph from "../graph";

const { SubMenu } = Menu;

const MainMenu = () => {
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

  return (
    <>
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={true}
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
          <SubMenu
            key="sub3"
            icon={
              <img
                alt="graphIcon"
                src="https://png.pngtree.com/png-vector/20190130/ourmid/pngtree-cartoon-hand-drawn-pie-chart-icon-illustration-painteddatauipie-chartworkplacejobsbusiness-png-image_595329.jpg"
                style={{ width: "35px", marginRight: "30px" }}
              />
            }
            title="Graph"
          >
            <Menu.Item key="5" onClick={() => history.push("/chart")}>
              Gráfico
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <Switch>
        <Route exact path="/rick-e-morty">
          <RickList
            rickCharList={rickCharList}
            setFav={setRickFav}
            fav={rickFav}
          />
        </Route>
        <Route path="/rick-e-morty/fav">
          <RickFavList fav={rickFav} setFav={setRickFav} />
        </Route>
        <Route exact path={"/pokemon"}>
          <PokeList
            pokeCharList={pokeCharList}
            fav={pokeFav}
            setFav={setPokeFav}
          />
        </Route>
        <Route path={"/pokemon/fav"}>
          <PokeFavList fav={pokeFav} setFav={setPokeFav} />
        </Route>
        <Route>
          <Graph
            exact
            path="/chart"
            rickList={rickCharList}
            pokeList={pokeCharList}
          />
        </Route>
        <Route>
          <LandingPage exact path="/" />
        </Route>
      </Switch>
    </>
  );
};

export default MainMenu;
