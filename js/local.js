 var Local = function () {  
    //游戏对象
    let game;
    //时间间隔
    const INTERVAL = 270;
    //定时器
    let timer = null;
    //时间计数器
    let timeCount = 0;
    //时间
    let time = 0;
    //绑定键盘事件
    var bindKeyEvent = function(){
        //onkeydown键盘事件
        document.onkeydown = function(e){
            if(e.keyCode==87){
                //up
                game.rotate();
            }else if(e.keyCode == 68){
                //right
                game.right();
            }else if(e.keyCode == 83){
                //down
                game.fall();
            }else if(e.keyCode == 65){
                //left
                game.left();
            }else if(e.keyCode == 98){
                //space 
                // game.fall();
            }
        }
    }
    //移动
    var move = function(){
        timeFunc();
        if(!game.down()){
            game.fixed();
            var line = game.checkClear();
            if(line){
                game.addScore(line);
            }
            var gameOver = game.checkGameOver();
            if(gameOver){
                game.gameover(false);
                stop();
            }else{
                game.performNext(generateType(),generateNext());
            }
        }
    }
    //随机生成干扰行
    var generateBottomLine = function(lineNum){
        var lines = [];
        for(var i = 0;i<lineNum;i++){
            var line = [];
            for(var j =0;j<10;j++){
               line.push(Math.ceil(Math.random()*2)-1);
            }
            lines.push(line);
        }
        return lines;
    }
    //计时函数
    var timeFunc = function () {
        timeCount = timeCount + 1;
        if(timeCount == 5){
            timeCount = 0;
            time = time + 1;
            game.setTime(time);
            //生成干扰行
            if(time % 100 ==0){
                game.addTailLines(generateBottomLine(1));
            }
        }
    }
    //随机生成一个方块
    var generateType = function () {  
        return Math.ceil(Math.random()*7)-1;
    }
    //随机生成一个旋转次数
    var generateNext = function () {  
        return Math.ceil(Math.random()*4)-1;
    }
    //开始
    var start = function () {  
        var doms = {
            gameDiv:document.getElementById('local_game'),
            nextDiv:document.getElementById('local_next'),
            timeDiv:document.getElementById('local_time'),
            scoreDiv:document.getElementById('local_score'),
            resultDiv:document.getElementById('local_gameover')
        }
        game = new Game();
        game.init(doms,generateType(),generateNext());
        bindKeyEvent();
        game.performNext(generateType(),generateNext());
        timer = setInterval(move,INTERVAL)
    }
    //结束
    var stop = function () {
        if(timer){
            clearInterval(timer);
            timer=null;
        }
        document.onkeydown = null;
    }
    //导出api
    this.start = start;
}