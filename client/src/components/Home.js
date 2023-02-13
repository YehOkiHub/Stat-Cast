import React from "react";
import Nav from "./Nav";
let imgs = [
    "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/tom-brady-patriots-falcons-super-bowl-ap-photo-1645650913.jpg?crop=1.00xw:1.00xh;0,0&resize=900:*",
    "https://media.cnn.com/api/v1/images/stellar/prod/220114122205-20220114-sports-buffalo-bills-josh-allen.jpg?c=16x9&q=h_720,w_1280,c_fill"
]

function Home() {
    return (
        <div>
            
            <Nav/>
            
            <div className="homebody">
                <div className="topplayers">
                    <h1>Top players</h1><br/>

                    <p>
                    Patrick Mahomes, QB, Chiefs. Rating:98<br/>
                    Aaron Donald, DT, Rams. Rating:97<br/>
                    Aaron Rodgers, QB, Packers. Rating:99<br/>
                    Derrick Henry, RB, Titans. Rating:98<br/>
                    Travis Kelce, TE, Chiefs. Rating:97<br/>
                    Davante Adams, WR, Packers. Rating:98<br/>
                    Tom Brady, QB, Buccaneers. Rating:100<br/>
                    DeAndre Hopkins, WR, Cardinals. Rating:96<br/>
                    </p>
                    <img src={imgs[0]}/>



                </div>
                <div>
                   <div className="topteams">
                   <h1>Rankings</h1><br/>

                   <p>
                    Bills Ranking:1<br/>
                    Chiefs Ranking:2<br/>
                    49ers Ranking:3<br/>
                    Eagles Ranking:4<br/>
                    Bengals Ranking:5<br/>
                    Cowboys Ranking:6<br/>
                    Ravens Ranking:7<br/>
                    Giants Ranking:8<br/>
                    </p>


                    <img src={imgs[1]}/>

                   </div>



                </div>

            </div>
        </div>
    )

}

export default Home