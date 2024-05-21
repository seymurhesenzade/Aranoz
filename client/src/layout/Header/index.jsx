import React from "react";
import "../Header/index.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: <Link to={"/Riad"}>test1</Link>,
      key: "1",
    },
    {
      label: <Link to={"/Rafail"}>test2</Link>,
      key: "2",
    },
    {
      label: <Link to={"/Elmeddin"}>test3</Link>,
      key: "3",
    },
  ];
  return (
    <>
      <header id="navbar">
          <div className="navbar">
            <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" />

            <nav>
              <ul style={{ display: "flex" }}>
                <li>
                  <Dropdown
                    menu={{
                      items,
                      onClick,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Home
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    menu={{
                      items,
                      onClick,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Shop
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    menu={{
                      items,
                      onClick,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Pages
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    menu={{
                      items,
                      onClick,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Blog
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    menu={{
                      items,
                      onClick,
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Contact
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </li>
              </ul>
            </nav>
            <div className="social">
              <CiSearch />
              <CiHeart />
              <MdOutlineShoppingCart />
            </div>
          </div>
      </header>
    </>
  );
};

export default Header;
