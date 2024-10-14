function createCard(CourseName, attendance, coursecomp, assignstatus, assigncomp, dashoffset, classNo){
    let html=`<html>
    <head>
    <style>
        *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}
.container{
    border: 2px solid black;
    height: 480px;
    width: 200px;
    border-radius: 30px;
    margin-top: 60px;
    margin-right: 10px;
    background-color: transparent;
}
.scale {
  transform: scale(1, 1);
  transition: transform 0.5s ease;
}

.container:hover{
  transform: scale(1.15, 1.15);
}
.box{
    margin-left: 10px;
    margin-bottom: 10px;
}
.box1{
    background-color: #555;
    width: 25px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 10px;
}
.box2{
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px;
    height: 50px;
}
.box3{
    font-size: 24px;
}
.box4{
    /* background-color: #e3edf7; */
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
}
.box5 p{
    font-size: 20px;
    }
.assign{
    width: 150px;
    height: 29px;
    background-color: #ddd;
}
.small-box${classNo}{
    text-align: right;
    padding-top: 5px;
    padding-bottom: 5px;
    width: ${assigncomp}%;
    background-color: #f9bd45;
} 
.skill{
    width: 160px;
    height: 160px;
    /* background-color: cornflowerblue; */
    position: absolute;
}

.outer{
    height: 160px;
    width: 160px;
    border-radius: 50%;
    /* border: 1px solid red; */
    padding: 20px;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255,0.7);
    position: absolute;
    left: 4px;
}
.inner{
    height: 120px;
    width: 120px;
    border-radius: 50%;
    /* order: 1px solid red; */
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
                inset -4px -4px 6px -1px rgba(255,255,255,0.7),
                -0.5px -0.5px 0px rgba(255,255,255,1),
                0.5px 0.5px 0px rgba(0,0,0,0.15),
                0px 12px 10px -10px rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
}

#number${classNo}{
    font-weight: 600;
    color: #555;
}

.circle${classNo}{
    fill: none;
    stroke: url(#GradientColor);
    stroke-width: 20px;
    stroke-dasharray: 472;
    stroke-dashoffset: 472;
    animation: anim${classNo} 2s linear forwards;
}
svg{
    position: absolute;
    top: 0;
    left: 0;
}

@keyframes anim${classNo}{
    100%{
        stroke-dashoffset: ${dashoffset};
    }
}
    </style>
    </head>
    <body> 
    <div class="container scale">
        <div class="box box1">
        </div>
        <div class="box box2">${CourseName}</div>
        <div class="box box3">Attendance : ${attendance} <br><p style="font-size: 20px; margin-top: 5px;">Course Status :</p> </div>
        <div class="box box4">
            <div class="skill">
                <div class="outer">
                    <div class="inner">
                        <div id="number${classNo}">
                            
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                    <defs>
                       <linearGradient id="GradientColor">
                          <stop offset="0%" stop-color="#e91e63" />
                          <stop offset="100%" stop-color="#673ab7" />
                       </linearGradient>
                    </defs>
                    <circle class="circle${classNo}" cx="80" cy="80" r="70" stroke-linecap="round" />
                </svg>
            </div>
        </div>
        <div class="box box5">
            <p>Assignment Status : </p>
            <div class="assign"><div class="small-box${classNo}">${assignstatus}</div></div>
        </div>
        <div class="box box6">Last 24 hours</div>
    </div>
    <!-- <script src="script.js"></script>  commentng this out because calling script two times , will also run within functions twice , but even when not commenting , it is not repeating-->
    <script>
        let number${classNo} = document.getElementById("number${classNo}");
        var counter = 0;
        setInterval(()=>{
            if(counter==${coursecomp}){
                clearInterval();
            }
            else{
                counter+=1;
                number${classNo}.innerHTML=counter+"%";
            }
        },30)
    </script>
    </body>
    </html>
`   
    document.querySelector(".container2").innerHTML=document.querySelector(".container2").innerHTML + html;
}

createCard( "Programming Fundamentals", "15/18", 80, "7/8", 87.5, 472-0.8*472, 1);
createCard( "Mathematics", "18/19", 94, "4/5", 94.73, 472-0.9*472, 2);
createCard( "Engineering Drawing", "10/18", 55.55, "4/8", 50,472-0.55*472, 3);
createCard( "Electronics", "12/18", 66.66, "6/7", 85.71, 472-0.66*472, 4);
createCard( "WebDev", "15/18", 83.33, "6/6", 100, 472-0.83*472, 5)