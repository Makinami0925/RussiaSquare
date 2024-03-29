//Square1
var Square1 = function(){
    Square.call(this);
    //旋转数组
    this.rotates = [
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0],
        ]
    ];
}
Square1.prototype = Square.prototype;
//Square2
var Square2 = function(){
    Square.call(this);
    //旋转数组
    this.rotates = [
        [
            [0,2,0,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [2,0,0,0],
            [2,2,0,0],
            [2,0,0,0],
            [0,0,0,0],
        ],
        [
            [2,2,2,0],
            [0,2,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [0,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
        ]
    ];
}
Square2.prototype = Square.prototype;
//Square3
var Square3 = function(){
    Square.call(this);
    //旋转数组
    this.rotates = [
        [
            [2,0,0,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,2,2,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [2,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
        ]
    ];
}
Square3.prototype = Square.prototype;
//Square4
var Square4 = function(){
    Square.call(this);
    //旋转数组
    this.rotates = [
        [
            [0,0,2,0],
            [2,2,2,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,2,0,0],
            [0,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
        ],
        [
            [0,0,0,0],
            [2,2,2,0],
            [2,0,0,0],
            [0,0,0,0],
        ],
        [
            [2,2,0,0],
            [0,2,0,0],
            [0,2,0,0],
            [0,0,0,0],
        ]
    ];
}
Square4.prototype = Square.prototype;
//Square5
var Square5 = function(){
    Square.call(this);
    //旋转数组
    this.rotates = [
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [2,2,0,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ]
    ];
}
Square5.prototype = Square.prototype;
//Square6
var Square6 = function(){
    Square.call(this);
    //旋转数组
    this.rotates = [
        [
            [2,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [0,2,2,0],
            [0,2,0,0],
            [0,0,0,0],
        ],
        [
            [2,2,0,0],
            [0,2,2,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,0,2,0],
            [0,2,2,0],
            [0,2,0,0],
            [0,0,0,0],
        ]
    ];
}
Square6.prototype = Square.prototype;
//Square7
var Square7 = function(){
    Square.call(this);
    //旋转数组
    this.rotates = [
        [
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,2,0,0],
            [0,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
        ],
        [
            [0,2,2,0],
            [2,2,0,0],
            [0,0,0,0],
            [0,0,0,0],
        ],
        [
            [0,2,0,0],
            [0,2,2,0],
            [0,0,2,0],
            [0,0,0,0],
        ]
    ];
}
Square7.prototype = Square.prototype;

var SquareFactory = function(){};
SquareFactory.prototype.make = function(index, dir){
    let s;
    index += 1;
    switch(index){
        case 1:
            s = new Square1();
            break;
        case 2:
            s = new Square2();
            break;
        case 3:
            s = new Square3();
            break;
        case 4:
            s = new Square4();
            break;
        case 5:
            s = new Square5();
            break;
        case 6:
            s = new Square6();
            break; 
        case 7:
            s = new Square7();
            break;
    }
    s.origin.x=0;
    s.origin.y=3;
    s.rotate(dir);
    return s;
}