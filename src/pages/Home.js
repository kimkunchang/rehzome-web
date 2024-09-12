import React from 'react';
import '../css/Home.css'

import { NavLink } from "react-router-dom";
import Button from "../components/Button";

class Home extends React.Component {

    render() {

        return (
            <div>
                <div className="homeFrame">
                    <div>
                        <h1 id='home_title'>홈(Rehzome)</h1>
                    </div>
                    <div className="input">
                        <Button label="로그인"  > </Button>
                        <div> <NavLink to="/login"> 로그인</NavLink>
                        </div>
                        <div><NavLink to="/sign-up"> 회원가입 </NavLink></div>
                        <div><NavLink to="/main"> 메인 </NavLink></div>
                        <div><NavLink to="/post"> 글쓰기 </NavLink></div>
                    </div>
                </div>
            </div>
        )
    }
}

// const Home = () => {
//
//     const navigate = useNavigate();
//
//     const moveLogin = () => {
//         navigate('/login')
//     };
//     const moveSignUp = () => {
//         navigate('/sign-up')
//     };
//     const moveMain = () => {
//         navigate('/main')
//     };
//     const moveBricksCreate = () => {
//         navigate('/create')
//     };
//
//     return (
//         <div style={{marginLeft: "10px"}}>
//         <h1>홈(Rehzome)</h1>
//             <p>이곳은 홈(소개) 페이지 입니다. 가장 먼저 보여지는 페이지죠.</p>
//             {/*<h4 style={{textAlign: "center"}}>*/}
//             {/*    <span style={{fontSize: "36px"}}>*/}
//             {/*        <strong>*/}
//             {/*            <span style={{color: "rgb(51, 51, 51)"}}>*/}
//             {/*                Philosophy*/}
//             {/*            </span>*/}
//             {/*        </strong>*/}
//             {/*    </span>*/}
//             {/*</h4>*/}
//             {/*<h4 style={{textAlign: "center"}}>*/}
//             {/*    <span style={{fontSize: "30px"}}>*/}
//             {/*        <strong>*/}
//             {/*            <span style={{color: "rgb(51, 51, 51)"}}>*/}
//             {/*                "우리는 문장을 적지 않습니다. 문장을 지켜냅니다."*/}
//             {/*            </span>*/}
//             {/*        </strong>*/}
//             {/*    </span>*/}
//             {/*</h4>*/}
//             <div style={{marginBottom:"10px"}}> <Button onClick={moveLogin}>로그인</Button></div>
//             <div style={{marginBottom:"10px"}}><Button onClick={moveSignUp}>회원가입</Button></div>
//             <div style={{marginBottom:"10px"}}><Button onClick={moveMain}>메인</Button></div>
//             <div style={{marginBottom:"10px"}}><Button onClick={moveBricksCreate}>Bricks 쓰기</Button></div>
//         </div>
//     );
// };

export default Home;