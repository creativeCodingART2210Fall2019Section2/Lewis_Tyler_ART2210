

{


    margin: 0;
    padding: 0;
    border: 0;
  }
  html, body{
    min-height: 100%;
  }

  body{
      background: #4ff887
  }
  .clock{
      position: relative;
      height: 200px;
      width: 200px;
      background: white;
      box-sizing: border-box;
      border-radius: 100%;
      border: 10px solid #67d2cb;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
  }
.clock  .top{
    position: absolute;
    width: 3px;
    height: 8px;
    background: #262626;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.clock  .bottom{
    position: absolute;
    width: 3px;
    height: 8px;
    background: #262626;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
}
.clock  .center{
    height: 6px;
    width: 6px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #262626;
    border-radius: 100%;
}
.clock  .shadow{
    height: 200px;
    width: 200px;
    position: absolute;
    left: 68px;
    top: 68px;
    transform: rotate(135deg);
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.1))
}
.clock  .hour{
    width: 3px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: time 60s infinite linear;
}
.clock  .hour:before{
    position: absolute;
    content: '';
    background: #262626;
    height: 28px;
    width: 3px;
    top: 67px;
}
.clock  .minute{
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: time 30s infinite linear;
}
.clock  .minute:before{
    position: absolute;
    content: '';
    background: #262626;
    height: 48px;
    width: 1px;
    top: 50px;
}
.clock  .second{
    width: 2px;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    animation: time 15s infinite linear;
}
.clock  .second:before{
    position: absolute;
    content: '';
    background: #fd1111;
    height: 60px;
    width: 2px;
    top: 30px;
}
@keyframes time{
    to{
        transform: rotate(360deg);
    }

}