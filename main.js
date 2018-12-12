//Intro and Update Log
/* Welcome 2 Kingdoms. This is the free Demo edition, and the final version is not out yet. I can't give you a link because it is not on Khan Academy.
In Kingdoms, you are a character (eventually customizable) that is trying to save a house from oncoming waves of zombies, kind of like a mix of PvZ and Terraria. However, it has a unique storyline that more gets unlocked as you play!
Notes: WAHOO! Update 2 is finally here, and I WORKED SO LONG ON IT! \@0@/
0.2.0c has been addded to address major bugfixes. Wave 2 has been enhanced with a better sword.
0.2.1b has made the first wave a bit easier.
0.2.1c has adressed bugs but there are still more to fix.
ALRIGHT GUYS WE ARE STARTING UP WAVE 3!
Platformer Elements:
var keyPressed = function () {
    kp[keyCode] = true;
};
var keyReleased = function () {
    kp[keyCode] = false;
};
Stats:
Fetch Quests: 0
Waves/Levels:2/1
Upgrades: 1
Max coins: 40
lines of code: 3800+
Right now, try to get 2 Completion Orbs.
Have a nice day! ♥ ♥ ♥
Update log {
0.1 (Complete) {
Basically, completed the first 10 screens of the game.
}
0.2 (Complete) {
0. Created clock (Complete) 
1. Created bigger house. (Complete)
2. Made the Shop. (Complete)
3. Fixed Coins (Complete)
4. Added Sword (Complete)
5. Added Exp (Complete)
Minor other stuff:
i. Fixed End-of-wave-one Flavor Text
ii. Added benifits to crouching
iii. Fixed broken link
iv. Fixed broken sword reloading.
}
0.2.0.1 & 0.2.0.2: Bugfixes
0.2.1 (Complete) {
1.Day/night cycle
2. Gabe the Custodian scene fixed
3. Health Potion
4. Sword updates
5. Khantober mode ACTIVATE!
}
0.2.1.1: Easier bossfight
0.2.1.2: Bugfixes, shortened length of Zombie Knight healthbar
0.2.2 (Released) {
1. New shop updates
2. Sword freaking upgrade!
}
0.2.2.1: where is the Play button?
0.2.2.2 patch notes:{
Armor fall off
Cutscene WIP skippable
Flipped Jack's color scheme
2nd sword upgrades
Minor bugfixing
}
0.2.3 {
Wave 3
Wizards
The final sword patch!
}
0.2.3.1 {
Nerfed the Zombie Knight due to reload functions.
Improved sword upgrades.
}
}
*/
//Stuff that doesn't change
text("ok", 200, 200);
{   
    var youdidit1 = [false, false, false];
    var armHP2 = 5;
    var wait2 = 3;
    var dudeX = 200;
    var t = true;
    var specAttac31 = [0, 200, 60, true, 30, 30];
    var specAttac36 = [0, 200, 60, false, 30, 30];
    var specattac39 = [0, 200, 60, false, 30, 30];
    var f = false;
    var onethreedead = [f, f, f, f, f, f, f, f, f, f];
    var startAttack3 = false;
    var cutscene = 0;
    var onethreehp = [random(10,100), random(25,50), random(25,50), random(25,50), random(25,50), random(10,100),random(25,50),random(25,50),random(10,100), 100];
    var onethreestart = [-50, -100, -150, -250, -225, -300, -400, -420, -440, -50];
    var remains = 1000;
    var keys = [];
    var armHP = 15;
            keyPressed = function() {
    keys[keyCode] = true;
};
keyReleased = function() {
    keys[keyCode] = false;
};
    var level = 1;
            var loadChoice = random(0,2);
    var loadText = ["", "Roly Jeny?????????", "Your character's name is 'The Guy'"];
    var n = 0;
      var h = hour(); 
    var t = true;
    var f = false;
var sidetoside = false;
var mrpotion = false;
var gabe2 = false;
var gabes2 = -5;
var completionCollection =[f, f, f, f, f];
var crouchRestore = 5;
var colReward = 0;
var rewardX = 200;
var richOpen = 0;
var rich = 1;
var houseLvL = 1;
var richChoice = 0;
var swordTimer = 30;
var startAttack2 = false;
var down = false;
var jump = false;
var onetwodead = [false, false, false, false, false, false, false, false, false, false];
var onetwohp = [25, 35, 45, 50, 50, 50, 50, 35, 25, 200];
var onetwostart = [-50, -100, -150, -250, -350, -360, -370, -380, -450, -350];
var completeOrbs = 0;
var wait = 60;
var dmg = 10;
var swordLvL = 1;
var SwordC = [20];
var SwordxP = [50];
var xP = 0;
var shopOpen = false;
var shop = 1;
var pedia = 0;
var boxChance = 7;
var homeChest = true;
var itemBox = 0;
var seconds = 0;
var minutes = 0;
var hours = 12;
var f = createFont("Comic Sans MS");
var tiem = 100;
var nine = false;
var wave = 0;
var f2 = createFont ("Courier New");
var dead = 3600;
var gabe = false;
var ded = [-20, -20, -20, -20, -20, -20, -20, -20, -20, -20];
var GabeStart = 0;
var creditStart = 435;
var colorScheme = [random(0, 255), random(0, 255), random(0, 255)];
var rare = 0;
var rareChance = 1;
var maxEnemy = 10;
var killedEnemy = 0;
var coin = 10;
var energy = 100;
var reload = 0;
var enemyHP = [25, 25, 25, 25, 35, 35, 35, 45, 45, 150];
var startAttack1 = false;
var HP = 100;
var houseHP1 = 200;
var startX = [0, -275, -325, -475, -525, -575, -625, -675, -725, -775, -825];
var percent = 0;
var timer = 0;
var timer2 = 0;
var b = 300;
var fast = 0;
var screen = 1;
var levelsUnlocked = 1;
var ok1 = 0;
var ok = random(0.100, 0.300);
var message = 1;
var kingKevin = 325;

var dudeY = 275;
var padZero = function(num) {
var numDigits = 2;
var n = abs(num);
var zeros = max(0, numDigits - floor(n).toString().length );
var zeroString = pow(10, zeros).toString().substr(1);
return zeroString + n;
};
var sword = true;
}
//Save Codes
var saveCode = 0;
//Objects
{
var titleScreenTitle = function(title, x, y) {
    this.title = title;
    this.x = x;
    this.y = y;
};
var titleScreenText = function(x, y, message, color, size) {
    this.x = x;
    this.y = y;
    this.message = message;
    this.color = color;
    this.size = size;
};
var levelBox = function(x, y, width, number) {
    this.x = x;
    this.y = y;
    this.number = number;
    this.width = width;
};
var richBall = function(section, posReward) {
    this.section = section;
    this.posReward = posReward;
};
var onetwoenemy = function(IDnum) {
    this.IDnum = IDnum;
};
titleScreenTitle.prototype.draw = function() {

    textFont(f,45);
    var logoColor = 255;
    if (n < 45) {
        n+=1;
    }

    fill(logoColor, logoColor, logoColor);
    text(this.title, this.x, this.y);
};
titleScreenText.prototype.draw = function() {

    fill(this.color, this.color, this.color);
    text(this.message, this.x, this.y);
};
levelBox.prototype.draw = function() {
    fill(0, 0, 0);
    rect(this.x, this.y, this.width, 50);
    fill(255, 255, 255);
    textSize(54);
    text(this.number, this.x + 10, this.y + 40);
};
richBall.prototype.spin = function() {
    if (this.posReward === 5) {
        if (rich === 1) {
            colReward = 1;
            richChoice = random(0,5);
            rich = 0;
        }
        if (rewardX > 100) {
            rewardX -= 1;
        }
        if (richChoice > 0 && richChoice <= 3) {
            if (colReward === 1){
            coin += 100;
            colReward = 0;
            }
            fill(255, 255, 0);
            ellipse(200, rewardX, 20, 20);
        }
        if (richChoice > 3 && richChoice <= 4) {
            if (colReward === 1 ) {
            swordLvL += 1;
            dmg += 1;
            println("Your sword is now at lvl" + swordLvL);
            }
            
        }
        if (richChoice > 4) {
            houseLvL += 1;
            richChoice = 0;
        }
        
        fill(163, 115, 0);
        arc(200, 200, 100, 100, -90 + richOpen, 270 - richOpen);
        if (richOpen < 30) {
            richOpen += 0.5;
        }
    }
    
};
onetwoenemy.prototype.attack = function() {
    {

                if (onetwostart[this.IDnum] === 400) {
                houseHP1 -= 15;
                maxEnemy -= 1;
            }
            if (onetwostart[this.IDnum] === dudeX) {
                HP -= 10;
                
            }
                if (onetwohp[this.IDnum] > 0) {
                  fill(9, 161, 9);
        onetwostart[this.IDnum] += 0.5;
        rect(onetwostart[this.IDnum], 275, 10, 25);
        ellipse(onetwostart[this.IDnum] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onetwostart[this.IDnum], 260, onetwohp[this.IDnum], 10);
        
   }
    else{
       if (onetwodead[this.IDnum] === false) {
           ded[this.IDnum] = onetwostart[this.IDnum];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onetwodead[this.IDnum] = true;
       }
       onetwostart[this.IDnum] = -50;
       
   }
    if (keyIsPressed && key.code === 32 && sword === true && jump === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);

        if (swordX1 < onetwostart[this.IDnum] + 10 && swordX1 > onetwostart[this.IDnum] &&  reload > 17- energy/10) {
                    onetwohp[0] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[this.IDnum] + 30 && dudeX > onetwostart[this.IDnum] && reload > 17-energy/10) {
                    onetwohp[this.IDnum] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);

        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }
    }
};
var test = 1;

}
//Animations
{
var draw = function() {
        //functions
    {
    keyPressed = function() {
    keys[keyCode] = true;
};
    keyReleased = function() {
    keys[keyCode] = false;
};
    mouseClicked = function() {
            if (screen === 1 && mouseX > 83 && mouseY > 100 && mouseX <308 & mouseY<144) {
            screen = 2;
            }
            if (screen === 1 && mouseX > 83 && mouseY > 200 && mouseX <308 & mouseY<244) {
            screen = 16;
            }
            
            if (screen === 3 && mouseX > 80 && mouseX < 180 && mouseY > 280 && mouseY < 320) {
                screen = 4;
            }

            if (screen === 4 && mouseX > 375 && mouseY < 25) {
                screen = 12;
                
            }
            if (screen === 5 && message < 11) {
                message += 1;
            }
            if (screen === 5 && message === 12) {
                message += 1;
                
            }
            if (screen === 5 && message === 14) {
                message += 1;
                
            }
            if (screen === 5 && message > 15) {
                message += 1;
            }
            if (screen === 5 && youdidit1[0] === true) {
                screen = 4;
            }
            if (screen === 8) {
                screen = 9;
            }
            if (screen === 12 && mouseX < 45 && mouseY > 355) {
                screen = 4;
                pedia = 0;
            }
if (screen === 12 && mouseX > 10 && mouseX < 185 && mouseY > 100 && mouseY < 130 && pedia === 0) {
    pedia = 1;
}
if (screen === 12 && mouseX > 215 && mouseX < 390 && mouseY > 100 && mouseY < 130 && pedia === 0) {
    pedia = 2;
}
if (screen === 12 && mouseX > 215 && mouseY > 180 && mouseX < 390 && mouseY < 210) {
pedia = 6;
}if (screen === 12 && mouseX > 10 && mouseY > 180 && mouseX < 185 && mouseY < 210) {
pedia = 5;
}
if (screen === 12 && mouseX > 10 && mouseY > 180 && mouseX < 185 && mouseY < 250 && pedia === 0 && wave >= 2) {
screen = 8;
creditStart = 435;
}

if (screen === 12 && mouseX > 5 && mouseY > 5 && mouseX < 45 && mouseY < 45 && pedia === 5) {
pedia = 10;
level = 1;
}if (screen === 12 && mouseX > 10 && mouseY > 100 && mouseX < 60 && mouseY < 150 && pedia === 10) {
screen = 5;
pedia = 0;
}
if (screen === 12 && mouseX > 90 && mouseY > 100 && mouseX < 140 && mouseY < 150 && pedia === 10 && wave >= 1) {
screen = 14;
pedia = 0;
}
if (screen === 12 && mouseX > 170 && mouseY > 100 && mouseX < 220 && mouseY < 150 && pedia === 10 && wave === 2) {
screen = 15;
pedia = 0;
}
if (screen === 12 && mouseX > 10 && mouseX < 185 && pedia === 6) {
    pedia = 9;
}
if (screen === 12 && pedia === 1 && wait2 <= 0){
    pedia = 11;
    wait2 = 3;
}
if (screen === 12 && pedia === 11 && wait2 <= 0) {
pedia = 1;
wait2 = 3;
}
            if (screen === 13 && mouseX > 130 && mouseX < 210 && shop === 1) {
                shop = 2;
                
            }
            if (screen === 13 && mouseX > 10 && mouseX < 90 && shop === 1) {
                shop = 3;
                
            }
             if (screen === 13 && mouseX > 10 && mouseX < 90 && shop === 2 && coin >= 20 && swordLvL === 1 && xP >= 50 && wait <= 0) {

                swordLvL = 2;
                coin -= 20;
                dmg += 1;
                println("Your sword is at LvL 2.");
                wait = 60;
            }     
            if (screen === 13 && mouseX > 10 && mouseX < 90 && shop === 2 && coin >= 20 && swordLvL === 2 && xP >= 50 && wait <= 0) {

                swordLvL = 3;
                coin -= 20;
                dmg += 1;
                println("Your sword is at LvL 3.");
                wait = 60;
                screen = 8;
            }  if (screen === 13 && mouseX > 10 && mouseX < 90 && shop === 3 && coin >= 5 && wait <= 0) {
                println("You got a potion!(What a waste of money.)");
                mrpotion = true;
                wait = 60;
                coin -= 5;
            }

            
            if (screen === 13 && mouseX < 30 && mouseY< 15) {
                screen = 10;
                shop = 1;
            }
            
        };}
    if (screen === 1) {

        background(b, b, b);
        var kingdomsTitle = new titleScreenTitle ("Kingdoms", 100, 63);
        var playText = new titleScreenText (83, 138,"New Game", 255, 44);
        var continueGame = new titleScreenText (83, 238, "Continue", 255, 44);
        if (b < 1) {
            fill(74, 48, 17);
rect(83, 100, 225, 44);
rect(83, 200, 185, 44);
            kingdomsTitle.draw();
            playText.draw();
            continueGame.draw();
        }
        textSize(10);
        text(round(millis()/1000), 10, 300);
    b -= 1;

    }
    if (screen === 2) {
        
        if (ok1 > 5) {
            colorScheme = [25, 255, 62];
            ok1 = 0;
            ok = 0.500;
        }
        ok1 += 0.2;
        percent += ok;
        
        if (percent > 100) {
            percent = 100;
        }
        if (percent === 100) {
            timer += 0.5;
            if (timer === 5) {
                screen = 3;
            }
        }
colorScheme = [random(0, 255),random(0, 255), random(0,255)];
        background(255, 255, 255);
        fill(colorScheme[0], colorScheme[1], colorScheme[2]);
        textFont(f, 20);
        text(loadText[round(loadChoice)], 1, 215);
        rect(10, 58, percent * 3.8, 10);
        text(round(percent) + "%", 180, 100);
        }
    if (screen === 3) {
           background(255, 127.5, 0);
           fill(97, 49, 0);
           rect(-1, 300, 402, 101);
           rect(300, 200, 100, 100);
           triangle(290, 200, 410, 200, 350, 150);
           if (saveCode >= 1) {
              screen = 4; 
           }
           fill(255, 255, 0);
           rect(0, 200, 100, 100);
           fill(0, 0, 255);
           rect(0, 200, 100, 25);
           fill(255, 255, 0);
           textSize(29);
           text("Jack's", 2, 223);
           
        }
    if (screen === 4) {


        if (keys[UP]=== true) {
            jump = true;
        }
        if (jump === true) {
            if (message === 20) {
                message += 1;
            }
            if (dudeY > 250 && down === false) {
                dudeY -= 1;
            }
            if (dudeY === 250) {
                down = true;
                energy -= 1;
            }
            if (down === true && dudeY < 275) {
                dudeY += 1;
            }
            if (dudeY === 275 && down === true) {
                jump = false;
                down = false;
            }
            
}
if (wave === 2){
keys[UP] = false;
}
    seconds += 1;
    GabeStart = -10;
        gabe = false;
               
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    
    if (minutes >= 60) {
        hours += 1;
        minutes = 0;
    }
    if (hours === 25) {
        hours -= 24;
    }
    if (hours >= 19) {
    background(49, 15, 105);
        
    }
    else if (hours < 7) {
        background(49, 15, 105);
    } 
    else if(hours === 18) {
    background(12, 8, 130);
    }
    else {
        background(0, 162, 255);
         
    }
    textSize(15);
    fill(0, 0, 0);
    if (minutes >= 10) {

    text(hours + ":" + minutes, 10, 20);
    }
    if (minutes < 10) {
        text(hours + ":0" + minutes, 10, 20);
    }
        if (hours === 15 && minutes === 30 && wave === 0) {
 screen = 5;
 message = 2;
    }
    fill(255, 208, 0);
    rect(375, 0, 25, 25);
    fill(166, 35, 35);
    rect(300, 200, 100 ,100);
    rect(350, 250, 30, 50);
    triangle(290, 200, 410, 200, 350, 150);
    fill(135, 107, 47);
    rect(-1, 300, 402, 101);
    if (wave >= 1) {
    fill(255, 255, 0);
rect(0, 200, 100, 100);
fill(0, 0, 255);
rect(20, 250, 30, 50);
rect(0, 200, 100, 25);
fill(255, 255, 0);
textSize(28);
text("Jack's", 0, 225);
}
    if (keys[LEFT] === true) {
                dudeX -= 1.0;
            }
            if (keys[RIGHT] === true) {
                dudeX += 1.0;
            }
            fill(2, 120, 2);
            
    rect(dudeX, dudeY, 10, 25);
    fill(252, 255, 163);
    ellipse(dudeX + 5.5, dudeY - 5, 15, 15);
    fill(0, 0, 0);
    if (keyIsPressed && key.code === 32 && dudeX > 350) {
    screen = 11;
            dudeX = 100;
}
if (hours > 8 && hours < 19 && wave >= 1) {
    shopOpen = true;
} else {
    shopOpen = false;
}
    if (keyIsPressed && key.code === 32 && dudeX < 50 && shopOpen === true) {
    screen = 10;
            dudeX = 100;
}
    }
    if (screen === 5) {
        // Just had to kick these out of the way
    {
    dead = 3600;
    background(0, 200, 255);
        if (gabe === true) {
        fill(0, 0, 0);
        rect(GabeStart, 275, 10, 25);
        fill(252, 255, 163);
        ellipse(GabeStart + 5, 270, 15, 15);
        GabeStart += 0.5;
        line(GabeStart + 10, 285, GabeStart + 20, 300);
        fill(166, 96, 96); 
        rect(GabeStart + 16, 298, 8, 2);
    }
    fill(166, 35, 35);
    rect(300, 200, 100 ,100);
    rect(350, 250, 30, 50);
    triangle(290, 200, 410, 200, 350, 150);
    fill(135, 107, 47);
    rect(-1, 300, 402, 101);
    fill(2, 120, 2);
    rect(dudeX, dudeY, 10, 25);
    fill(252, 255, 163);
    ellipse(dudeX + 5.5, dudeY - 5, 15, 15);
    fill(255, 0, 0);
    ellipse(ded[0], 305, 10, 10);
    ellipse(ded[1], 305, 10, 10);
    ellipse(ded[2], 305, 10, 10);
    ellipse(ded[3], 305, 10, 10);
    ellipse(ded[4], 305, 10, 10);
    ellipse(ded[5], 305, 10, 10);
    ellipse(ded[6], 305, 10, 10);
    ellipse(ded[7], 305, 10, 10);
    ellipse(ded[8], 305, 10, 10);
    ellipse(ded[9], 310, 20, 20);
    fill(235, 127, 127);
            rect(kingKevin - 11, 345, 20, 12);
            ellipse(kingKevin, 300, 100, 100);
            rect(kingKevin - 33, 276, 20, 12);
            rect(kingKevin + 13, 276, 20, 12);
            line(kingKevin - 13, 281, kingKevin + 13, 281);
            line(kingKevin - 30, 319, kingKevin + 30, 319);
            ellipse(kingKevin - 45, 368, 25, 25);
            ellipse(kingKevin + 45, 368, 25, 25);
            ellipse(kingKevin, 297, 10, 10);
            fill(230, 192, 3);
            triangle (kingKevin - 39, 265, kingKevin - 10, 265, kingKevin - 39, 230);
            triangle (kingKevin + 10, 265, kingKevin + 39, 265, kingKevin + 39, 226);
            triangle (kingKevin + 25, 265, kingKevin - 25, 265, kingKevin, 194);
            arc(kingKevin, 269, 81, 42, 180, 361);
            fill(0, 0, 0);
            ellipse(kingKevin - 22, 282, 10, 10);
            ellipse(kingKevin + 23, 282, 10, 10);
            fill(255, 0, 0);
            arc(kingKevin, 320, 60, 36, 0, 180);
            ellipse(kingKevin , 229, 15, 15);
            fill(0, 170, 255);
            ellipse(kingKevin - 38, 232, 15, 15);
            ellipse(kingKevin + 38, 232, 15, 15);
            fill(0, 0, 0);
            arc(kingKevin, 400, 60, 95, 180, 360);


  
  var s = second(); 
  var m = minute(); 

    
  textFont(createFont("monospace", 20), 20);

  textSize(17);
  text(padZero(h) + padZero(m) + padZero(s), 333, 21);
    }
    // this is getting tiring.
    {
            if (message === 2) {
                textSize(12.5);
            text("Hi again.", 13, 340);
            }
            if (message === 3) {
                textSize(12.5);
            text("Welcome to...", 13, 340);
            }
            if (message === 4) {
                textSize(12.5);
            text("The Battleground!", 13, 340);
            }
            if (message === 5) {
                textSize(12.5);
            text("Here, you'll be able to fight ", 13, 340);
            text("enemies, and  collect coins.", 13, 356);
            
            }
            if (message === 6) {
                textSize(12.5);
            text("The Battleground provides the basis", 13, 340);
            text("for the whole game.", 13, 356);
            }
            if (message === 7) {
                textSize(12.5);
            text("Here, have this sword.", 13, 340);
            }
            if (message === 8) {
                kingKevin = 500;
                text("You got a regular sword!", 25, 85);
                sword = true;
            }
            if (message === 9) {
                textSize(12.5);
                kingKevin = 325;
                text("Use it to destroy that zombie", 13, 340);
                text("by pressing Space.", 13, 355);
            }
            if (message === 10) {
                textSize(12.5);
            text("Move using the arrow keys.", 13, 340);
            }
            if (message === 11) {
                kingKevin = 500;
                startAttack1 = true;
            }
            if (message === 12) {
                kingKevin = 350;
                textSize(12.5);
                text ("Yikes, there are more coming!", 13, 340);
            }
            if (message === 13) {
                kingKevin = 500;
            }
            if (killedEnemy === (maxEnemy - 1)) {
                startAttack1 = false;
                message = 14;
                killedEnemy = maxEnemy - 1 + 0.1; 
            }
            if(message === 14) {
                fill(9, 161, 9);
                rect(35, 325, 80, 150);
                ellipse(75, 300, 100, 100);
                fill(0, 0, 0);
                textSize(12.5);
                text("Try to get past ME!", 126, 340);
            }
            if (message === 15) {
                startAttack1 = true;
            }
            if (killedEnemy === maxEnemy + 0.1) {
                message = 16;
                killedEnemy = maxEnemy + 0.2;
            }
            if (message === 16) {
                kingKevin = 325;
                gabe = true;
                textSize(12.5);
                text("Nice! You finished the attack!", 12, 340);
            }
            if (message === 17) {
                textSize(12.5);
                text("The next attack will happen", 12, 340);
                text("at 15:30 or when you press Play.", 12, 352.5);
            }
            if (message === 18) {
                textSize(12.5);
                text("Additionally, the shop has", 12, 340);
                text("been rebuit, so feel free", 12, 352.5);
                text("get stuff from there.", 12, 365); 
            }
            if (message === 19) {
                youdidit1[0] = true;
            }
    }
    // well, you do have to move
    {
            if (keys[LEFT] === true) {
                dudeX --;
            }
            if (keys[RIGHT] === true) {
                dudeX ++;
            }
    }
            if (startAttack1 === true) {
            text (round(killedEnemy) + "/" + maxEnemy, 190, 30);
    //This is the main code for the enemies.
    {
                if (startX[0] === 300) {
                houseHP1 -= 0.1;
                startX[0] -= 1;
            }
            if (startX[0] === dudeX) {
                HP -= 10;
                
            }
                if (enemyHP[0] > 0) {
                  fill(9, 161, 9);
                  
        startX[0] += 0.5;
                  
        rect(startX[0], 275, 10, 25);
        ellipse(startX[0] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[0], 260, enemyHP[0], 10);
        
   } else{
       startX[0] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[0] + 10 && swordX1 > startX[0] &&  reload > 17- energy/10) {
                    enemyHP[0] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[0] + 30 && dudeX > startX[0] && reload > 17-energy/10) {
                    enemyHP[0] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
if (enemyHP[0] === -5) {
ded[0] = startX[0];
        xP+= 5;
                message = 12;
                coin += 1;
                
                killedEnemy += 1;
        enemyHP[0] = -6;
            }
            }
            //end
            //this is wave 1
            {
            
            fill(4, 255, 0);
            rect(10, 10, HP * 1.5, 10); 
            rect(10, 25, energy * 1.5, 10);
            rect(300, 200, houseHP1*0.5, 10);
            reload += 0.5;
            //her
            fill(217, 255, 0);
            text(coin + " Gamz", 300, 100);
            text(xP + " xP", 300, 120);
            
                if (startX[1] === 300) {
                houseHP1 -= 0.1;
                startX[1] -= 1;
            }
            if (startX[1] === dudeX) {
                HP -= 10;
                
            }
if (enemyHP[1] > 0) {
                  fill(9, 161, 9);
        
        startX[1] += 0.5;
        rect(startX[1], 275, 10, 25);
        ellipse(startX[1] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[1], 260, enemyHP[1], 10);
        } 
else{
       startX[1] = -50;
       
   }


            
            
            reload += 0.5;
            if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[1] + 10 && swordX1 > startX[1] &&  reload > 17- energy/10) {
                    enemyHP[1] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[1] + 30 && dudeX > startX[1] && reload > 17- energy/10) {
                    enemyHP[1] -= 10;
                    reload = 0;
                    energy -= 1;
                }
                
            }
            
            
            
    if (enemyHP[1] === -5){
        xP += 5;
        ded[1] = startX[1];
        coin += 1;
        
        killedEnemy += 1;
        enemyHP[1] = -6;
    }
         if (startX[2] === 300) {
                houseHP1 -= 0.1;
                startX[2] -= 1;
            }
            if (startX[2] === dudeX) {
                HP -= 10;
                
            }
if (enemyHP[2] > 0) {
                  fill(9, 161, 9);
        
        startX[2] += 0.5;
        rect(startX[2], 275, 10, 25);
        ellipse(startX[2] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[2], 260, enemyHP[2], 10);
        } 
else{
       startX[2] = -50;
       
   }
   

            
            
            reload += 0.5;
            if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[2] + 10 && swordX1 > startX[2] &&  reload > 17- energy/10) {
                    enemyHP[2] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[2] + 30 && dudeX > startX[2] && reload > 17- energy/10) {
                    enemyHP[2] -= 10;
                    reload = 0;
                    energy -= 1;
                }
                
            }
    if (enemyHP[2] === -5){
        xP += 5;
        ded[2] = startX[2];
        coin += 1;
        
        killedEnemy += 1;
        enemyHP[2] = -6;
    }
  


                if (startX[3] === 300) {
                houseHP1 -= 0.1;
                startX[3] -= 1;
            }
            if (startX[3] === dudeX) {
                HP -= 10;
                
            }
                if (enemyHP[3] > 0) {
                  fill(9, 161, 9);
        startX[3] += 0.5;
        rect(startX[3], 275, 10, 25);
        ellipse(startX[3] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[3], 260, enemyHP[3], 10);
        
   } else{
       startX[3] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true ) {
        var swordX1 = dudeX - 15;
if (swordX1 < startX[3] + 10 && swordX1 > startX[3] &&  reload > 17- energy/10) {
                    enemyHP[3] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[3] + 30 && dudeX > startX[3] && reload > 17- energy/10) {
                    enemyHP[3] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
if (enemyHP[3] === -5) {
            xP += 5;
        ded[3] = startX[3];
                coin += 1;
                
                killedEnemy += 1;
        enemyHP[3] = -6;
            }
            if (startX[4] === 300) {
                houseHP1 -= 0.1;
                startX[4] -= 1;
            }
            if (startX[4] === dudeX) {
                HP -= 10;
                
            }
                if (enemyHP[4] > 0) {
                  fill(9, 161, 9);
        startX[4] += 0.5;
        rect(startX[4], 275, 10, 25);
        ellipse(startX[4] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[4], 260, enemyHP[4], 10);
        
   } else{
       startX[4] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[4] + 10 && swordX1 > startX[4] &&  reload > 17- energy/10) {
                    enemyHP[4] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[4] + 30 && dudeX > startX[4] && reload > 17- energy/10) {
                    enemyHP[4] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
if (enemyHP[4] === -5) {
            xP += 5;
            ded[4] = startX[4];
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
        enemyHP[4] = -6;
            }

if (startX[5] === 300) {
                houseHP1 -= 0.1;
                startX[5] -= 1;
            }
            if (startX[5] === dudeX) {
                HP -= 10;
                
            }
                if (enemyHP[5] > 0) {
                  fill(9, 161, 9);
        startX[5] += 0.5;
        rect(startX[5], 275, 10, 25);
        ellipse(startX[5] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[5], 260, enemyHP[5], 10);
        
   } else{
       startX[5] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[5] + 10 && swordX1 > startX[5] &&  reload > 17- energy/10) {
                    enemyHP[5] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[5] + 30 && dudeX > startX[5] && reload > 17- energy/10) {
                    enemyHP[5] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
if (enemyHP[5] === -5) {
        ded[5] = startX[5];
                xP += 5;
                coin += 1;
                killedEnemy += 1;
        enemyHP[5] = -6;
}
        if (startX[6] === 300) {
                houseHP1 -= 0.1;
                startX[6] -= 1;
            }
            if (startX[6] === dudeX) {
                HP -= 10;
                
            }
                if (enemyHP[6] > 0) {
                  fill(9, 161, 9);
        startX[6] += 0.5;
        rect(startX[6], 275, 10, 25);
        ellipse(startX[6] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[6], 260, enemyHP[6], 10);
        
   } else{
       startX[6] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[6] + 10 && swordX1 > startX[6] &&  reload > 17- energy/10) {
                    enemyHP[6] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[6] + 30 && dudeX > startX[6] && reload > 17- energy/10) {
                    enemyHP[6] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
if (enemyHP[6] === -5) {
            xP += 5;
        ded[6] = startX[6];
                coin += 1;

                killedEnemy += 1;
        enemyHP[6] = -6;
}

if (startX[7] === 300) {
                houseHP1 -= 0.1;
                startX[7] -= 1;
            }
            if (startX[7] === dudeX) {
                HP -= 10;
                
            }
                if (enemyHP[7] > 0) {
                  fill(9, 161, 9);
        startX[7] += 0.5;
        rect(startX[7], 275, 10, 25);
        ellipse(startX[7] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[7], 260, enemyHP[7], 10);
        
   } else{
       startX[7] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[7] + 10 && swordX1 > startX[7] &&  reload > 17- energy/10) {
                    enemyHP[7] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[7] + 30 && dudeX > startX[7] && reload > 17- energy/10) {
                    enemyHP[7] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
if (enemyHP[7] === -5) {
            xP += 5;
        ded[7] = startX[7];
        coin += 1;

        killedEnemy += 1;
        enemyHP[7] = -6;
            }

if (energy < 1) {
    HP -= 1;
}

if (startX[8] === 300) {
                houseHP1 -= 0.1;
                startX[8] -= 1;
            }
            if (startX[8] === dudeX) {
                HP -= 10;
                
            }
                if (enemyHP[8] > 0) {
                  fill(9, 161, 9);
        startX[8] += 0.5;
        rect(startX[8], 275, 10, 25);
        ellipse(startX[8] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(startX[8], 260, enemyHP[8], 10);
        
   } else{
       startX[8] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[8] + 10 && swordX1 > startX[8] &&  reload > 17- energy/10) {
                    enemyHP[8] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[8] + 30 && dudeX > startX[8] && reload > 17- energy/10) {
                    enemyHP[8] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
if (enemyHP[8] === -5) {
            xP += 5;
        ded[8] = startX[8];
        coin += 1;
        rareChance = random(0, 100);
        killedEnemy += 1;
        enemyHP[8] = -6;
            }
            if (startX[9] === 300) {
                houseHP1 -= 3;
                startX[9] -= 1;
            }
            if (startX[9] === dudeX) {
                HP -= 15;
                
            }
                if (enemyHP[9] > 0) {
                  fill(9, 161, 9);
        startX[9] += 0.5;
        rect(startX[9], 275, 12, 28);
        ellipse(startX[9] + 6, 270, 17, 17);
        fill(255, 0, 0);
rect(startX[9], 260, enemyHP[9]/3, 10);
        
   } else{
       startX[9] = -50;
       
   }
    
    if (keyIsPressed && key.code === 32 && sword === true ) {
var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
if (swordX1 < startX[9] + 10 && swordX1 > startX[9] &&  reload > 17- energy/10) {
                    enemyHP[9] -= 10;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < startX[9] + 30 && dudeX > startX[9] && reload > 17- energy/10) {
                    enemyHP[9] -= 10;
                    reload = 0;
                    energy -= 1;
                }
    }
            
if (enemyHP[9] === 0) {
    completionCollection[0] = true;
    completeOrbs += 1;
    hours = 18;
    minutes = 0;
    wave = 1;
    GabeStart = -5;
            xP += 15;
        ded[9] = startX[9];
                coin += 6;
                rareChance = random(0, 100);
                killedEnemy += 1;
        enemyHP[9] = -1;
        if (maxEnemy === killedEnemy) {
            startAttack1 = false;
    message = 14;
    
}
           }
            }
            }
if (maxEnemy === killedEnemy) {
    message = 14;
    
}
if (HP < 1) {
            screen = 6;
            }
if (keyIsPressed && key.code === 32 && dudeX > 350) {
    println("WHAT ARE YOU DOING?");
    
}
if (houseHP1 < 0) {
    screen = 7;
    
}
if (rareChance <= 1) {
                rare += 1;
                rareChance = 2;
                
            }
if (GabeStart === ded[0]) {
    ded[0] = -20;
}
if (GabeStart === ded[1]) {
    ded[1] = -20;
}
if (GabeStart === ded[2]) {
    ded[2] = -20;
}
if (GabeStart === ded[3]) {
    ded[3] = -20;
}
if (GabeStart === ded[4]) {
    ded[4] = -20;
}
if (GabeStart === ded[5]) {
    ded[5] = -20;
}
if (GabeStart === ded[6]) {
    ded[6] = -20;
}
if (GabeStart === ded[7]) {
    ded[7] = -20;
}
if (GabeStart === ded[8]) {
    ded[8] = -20;
}
if (GabeStart === ded[9]) {
    ded[9] = -20;
}
if (youdidit1[0] === true) {
    strokeWeight(1);
    fill(255, 255, 0);
    rect(45, 45, 310, 310);
    fill(166, 166, 166);
    rect(50,50, 300, 300);
    fill(4, 0, 255);
    textSize(40);
    text("Wave 1-1", 110, 110);
    textSize(20);
    text("+15 Gams", 75, 200);
    text("+60 xP", 250, 200);
    strokeWeight(5);
    fill(255, 0, 0);
    rect(100, 225, 200, 25);
    fill(0, 255, 0);
    rect(100, 225, xP, 25);
    fill(255, 255, 0);
    strokeWeight(1);
    rect(100, 325, 200, 50);
        kingKevin = 1000;
}
}
    if (screen === 6) {
        background(255, 255, 255);
        fill(255, 0, 0);
        textFont(f2, 79);
        text("YOU DIED", 10, 100);
        }
    if (screen === 7) {
        background(255, 255, 255);
        fill(255, 0, 0);
        textFont(f2);
        textSize(22);
        text("Your house was destroyed and", 10, 100);
        text("you and everyone in the house", 10, 122);
        text("DIED. The End.", 10, 144); 
    }
    if (screen === 8) {
        var f2 = createFont("Courier New");
        background(255, 255, 255);
        //creditStart -= 0.2;
        fill(0, 0, 0);
        textFont(f2);
        textSize(47);
        text("KINGDOMS DEMO", 10, creditStart);
        textSize(20);
        text("By Chocolate Covered Chickadees", 10, creditStart + 20);
        text("Made by:", 160, creditStart + 100);
        fill(0, 0, 0);
        
        rect(160, creditStart + 238, 80, 140);
        fill(255, 225, 148);
        ellipse(200, creditStart + 203, 100, 100);

        fill(230, 192, 3);
            triangle (189, creditStart + 173, 160, creditStart + 138, 160, creditStart + 173);
            triangle (210, creditStart + 173, 239, creditStart + 138, 239, creditStart + 173);
            triangle (175, creditStart + 173, 200, creditStart + 102, 225, creditStart + 173);
                        fill(0, 0, 0);
            ellipse(178, creditStart + 187, 10, 10);
            ellipse(222, creditStart + 187, 10, 10);
            noFill();
            rect(168, creditStart + 182, 20, 10);
            rect(212, creditStart + 182, 20, 10);
            noFill();
            ellipse(200, creditStart + 205, 10, 10);
            fill(255, 0, 0);
            line(180, creditStart +230, 220, creditStart +220);
            line(223, creditStart +216, 220, creditStart +220);
            text("Kevin B.",155, creditStart + 400);
            text("as King Kevin",130, creditStart + 420);
        if (creditStart < -520) {
            screen = 9; 
        }
    }  
    if (screen === 9) {
screen = 4;
    }
    if (screen === 10) {
            if (keyIsPressed && key.code === 32 && dudeX > 350) {
    screen = 13;
            dudeX = 100;
}
    if (keyIsPressed && key.code === 32 && dudeX < 50 && shopOpen === true) {
    screen = 4;
    dudeX = 100;
}
            if (keyIsPressed  && keyCode === LEFT) {
                dudeX -= 1.0;
            }
            if (keyIsPressed  && keyCode === RIGHT) {
                dudeX += 1.0;
            }

                    if (keyIsPressed && keyCode === UP && jump === false) {
            jump = true;
        }
        if (jump === true) {
            if (message === 20) {
                message += 1;
            }
            if (dudeY > 250 && down === false) {
                dudeY -= 1;
            }
            if (dudeY === 250) {
                down = true;
                energy -= 1;
            }
            if (down === true && dudeY < 275) {
                dudeY += 1;
            }
            if (dudeY === 275 && down === true) {
                jump = false;
                down = false;
            }
            
        }
        background(0, 0, 255);
        fill(255, 255, 0);
rect(20, 250, 30, 50);
    fill(255, 255, 0);
       rect(370, 275, 10, 25);
            fill(252, 255, 163);
    ellipse(375, 270, 15, 15);

        fill(255, 255, 0);
        rect(350, 290, 50, 10);
fill(2, 120, 2);
    rect(dudeX, dudeY, 10, 25);
            fill(252, 255, 163);
    ellipse(dudeX + 5.5, dudeY - 5, 15, 15);
    fill(255, 255, 0);
        rect(-1, 300, 402, 101);


    }
    if (screen === 11) {
        background(171, 101, 55);
            seconds += 1;
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours += 1;
        minutes = 0;
    }
    if (hours === 25) {
        hours -= 24;
    }
    textSize(15);
    if (minutes >= 10) {
    text(hours + ":" + minutes, 10, 55);
    }
    if (minutes < 10) {
        text(hours + ":0" + minutes, 10, 55);
    }
    if (hours === 15 && minutes === 30 && wave === 0) {
 screen = 5;
 message = 2;
    }
        if (energy > 80 && HP <=  100) {
            HP += 0.075;
            energy -= 0.01;
        }
            colorScheme = [random(0, 255), random(0, 255), random(0, 255)]; 
            fill(colorScheme[0], colorScheme[1], colorScheme[2]);
            rect(10, 10, HP * 1.5, 10); 
            rect(10, 25, energy * 1.5, 10);
          if (keyIsPressed  && keyCode === LEFT) {
                dudeX -= 1.0;
            }
            if (keyIsPressed  && keyCode === RIGHT) {
                dudeX += 1.0;
            }
                fill(133, 12, 12); 
            rect(50, 290, 50, 10);
            fill(255, 255, 255);
            rect(200, 290, 45, 10);
            ellipse(240, 288, 15, 10);
            fill(133, 20, 20);
    rect(350, 250, 30, 50);
    fill(2, 120, 2);
    rect(dudeX, dudeY, 10, 25);
            fill(252, 255, 163);
    ellipse(dudeX + 5.5, dudeY - 5, 15, 15);
    fill(112, 49, 49);
    rect(-1, 300, 401, 101);
    if (keyIsPressed && key.code === 32 && dudeX < 100 && dudeX > 50) {
        screen = 12;
        pedia = 6;
}
    if (keyIsPressed && key.code === 32 && dudeX > 350) {
    screen = 4;
            dudeX = 100;
}
    if (keyIsPressed && key.code === 32 && dudeX > 200 && dudeX < 245) {
energy += 1;
minutes += 1;
}
    if (keyIsPressed && key.code === 32 && dudeX > 125 && dudeX < 175) {
        if (homeChest === true) {
            homeChest = false;
itemBox += 1;
        }
    }
    if (itemBox === 1) {
        message = 20;
    }
    if (message === 20) {
        textSize(12);
        fill(255, 255, 255);
        text("You have a box. Wanna open it? Press B to do so.", 10, 325); 
    }
    if (keyIsPressed && key.code === 66 && itemBox > 0) {
        boxChance = random(0, 10);
        itemBox -= 1;
        message = 1;
    }
    if (boxChance === 1) {
        rare += 1;
        text ("OMG YOU GOT A RARE MATERIAL!!!", 10, 325);
    }
        if (boxChance === 2) {
        coin += 3;
        text ("You got 3 coins. Nice.", 10, 325);
        text ("Now you have "+ coin + "coins.", 10, 345);
    }
        if (boxChance >= 3 && boxChance < 6) {
        coin += 1;
        text ("A single coin. How typical.", 10, 325);
        text ("Now you have "+ coin + "coins.", 10, 345);
    }
        if (boxChance === 6) {
        text ("HAHA TROLLED!", 10, 325);
    }
        if (boxChance === 8) {
        HP = 100;
        text ("Eat sum fud", 10, 325);
    }
        if (boxChance === 9) {
        energy = 100;
        text ("Have some water", 10, 325);
    }
    if (energy > 100) {
        energy = 100;
    }

    }
    if (screen === 12) {
    background(255, 204, 0);
    textSize(45);
    text("X", 0, 400);
    textSize(15);
    if (pedia === 0) {
        fill(0, 0, 255);
        text("Welcome to KingdomPedia, your entire guide", 10, 20);
        text("to ALL of Kingdoms!", 10, 40);
        text("Click on the buttons below to get started.", 10, 60);
        fill(0, 255, 255);
        rect(10, 100, 175, 30);
        rect(215, 100, 175, 30);
        rect(10, 140, 175, 30);
        rect(215, 140, 175, 30);
        rect(10, 180, 175, 30);
        rect(215, 180, 175, 30);
        rect(10, 220, 175, 30);
        rect(215, 220, 175, 30);
        fill(0, 0, 255);
        text("Enemies", 64, 120);
        text("Game Mechanics", 243, 120);
        text("Bosses", 68, 160);
        text("Gamemodes", 260, 160);
        text("World(s)", 62, 200);
        text("Progress", 263, 200);
        text("Credits", 62, 240);
    }
    if (pedia === 1) {
        if (wave >= 1) {
            textSize(13);
            fill(0, 0, 255);
            text("Zombie", 10, 25);
            text("The zombie is the weakest and most basic", 10, 50);
            text("enemy, it appears in all levels. You can only", 10, 65);
            text("attack one zombie at once.", 10, 80);
            text("Starting Wave: 1-1", 10, 100);
            text("Health: 25-50", 10, 120);
            text("Damage: 10", 10, 140);
            text("Agility:Slow", 10, 160);
            fill(9, 161, 9);
            rect(260, 220, 80, 150);
            ellipse(300,200,100,100);
fill(0, 0, 255);
    wait2 -= 1;
            
        }
    }
    if (pedia === 11)    {
        if (wave >= 2){
        textSize(13);
            fill(0, 0, 255);
            text("Wizard", 10, 25);
            text("The wizard is a semi-smart enemy that, even", 10, 50);
            text("though it can use special attacks, has no idea", 10, 65);
            text("how to attack a house.", 10, 80);
            text("Starting Wave: 1-3", 10, 100);
            text("Health: 10-100", 10, 120);
            text("Damage: No melee damage", 10, 140);
            text("Agility: Does not move", 10, 160);
            fill(0, 255, 255);
            rect(260, 220, 80, 150);
            fill(255, 231, 145);
            ellipse(300,200,100,100);
fill(0, 0, 255);
wait2 -= 1;
}
    }
    
    if (pedia === 2) {
        text("You can use the left and right arrow keys", 10, 20);
        text("to move.", 10, 35);
        text("The space bar is the 'interact' button in", 10, 55);
        text("the Hub, and the Attack button in the ", 10, 70);
        text("Battleground.", 10, 85);
        if (wave > 1) {
            fill(0, 0, 255);
        text("Use up to jump and crouch with down.", 10, 105);
        
        }
        
    }
    if (pedia === 5) {
        background(0, 255, 0);
        fill(255, 0, 0);
        rect(5,5,40,40);
        fill(0,0,0);
        textSize(40);
        text("1", 16, 45);
        
    }
    if (pedia === 6) {
        fill(0, 0, 255);
        textSize(30);
        text(completeOrbs + "/5 completion orbs", 10, 100);
        fill(0, 255, 255);
        rect(10, 140, 175, 30);
        fill(0, 0, 255);
        text("Library", 38, 165);
    }
    if (pedia === 9) {
        if (completionCollection[0] === false) {
        fill(121, 252, 104);
        } else {
        fill(0, 255, 0);
        }
        ellipse(50, 50, 50, 50);
        
       
        

 if (completionCollection[1] === false) {
        fill(121, 252, 104);
        } else {
        fill(0, 255, 0);
        }
        ellipse(125, 50, 50, 50);
         if (completionCollection[2] === false) {
        fill(121, 252, 104);
        } else {
        fill(0, 255, 0);
        }
        ellipse(200, 50, 50, 50);
         if (completionCollection[3] === false) {
        fill(121, 252, 104);
        } else {
        fill(0, 255, 0);
        }
        ellipse(275, 50, 50, 50);
        
        if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75) {
            fill(217, 191, 95);
            rect(mouseX, mouseY, 180, 40);
            fill(0, 255, 255);
            textSize(11.6);
            text("Complete the first wave.", mouseX + 5, mouseY + 10);
            if (completionCollection[0] === false) {  
                text("Incomplete", mouseX + 5, mouseY + 35);
            }else {
                text("Complete", mouseX + 5, mouseY + 35);
            }
        }
        if (mouseX > 100 && mouseX < 150 && mouseY > 25 && mouseY < 75) {
            fill(217, 191, 95);
            rect(mouseX, mouseY, 180, 40);
            fill(0, 255, 255);
            textSize(11.6);
            text("Complete the second wave.", mouseX + 5, mouseY + 10);
            if (completionCollection[1] === false) {  
                text("Incomplete", mouseX + 5, mouseY + 35);
            }else {
                text("Complete", mouseX + 5, mouseY + 35);
            }
        }
 if (mouseX > 175 && mouseX < 225 && mouseY > 25 && mouseY < 75) {
            fill(217, 191, 95);
            rect(mouseX, mouseY, 180, 40);
            fill(0, 255, 255);
            textSize(11.6);
            text("Complete the third wave.", mouseX + 5, mouseY + 10);
            if (completionCollection[2] === false) {  
                text("Incomplete", mouseX + 5, mouseY + 35);
            }else {
                text("Complete", mouseX + 5, mouseY + 35);
            }
        }
         if (mouseX > 250 && mouseX < 300 && mouseY > 25 && mouseY < 75) {
            fill(217, 191, 95);
            rect(mouseX - 180, mouseY, 180, 40);
            fill(0, 255, 255);
            textSize(11.6);
            text("Complete a random fetch ", mouseX - 175, mouseY + 10);
            text("quest", mouseX - 175, mouseY + 20);
            if (completionCollection[2] === false) {  
                text("Incomplete", mouseX -175, mouseY + 35);
            }else {
                text("Complete", mouseX - 175, mouseY + 35);
            }
        }
        
        
        
    }
    if (pedia === 10) {
        fill(0, 0, 0);
        textSize(30);
        text("Wave Select for Level "+level, 5, 45);
        fill(0, 255,0);
        rect(10, 100, 50, 50);
        rect(90, 100, 50, 50);
        rect(175, 100, 50, 50);
        rect(255, 100, 50, 50);
        rect(335, 100, 50, 50);
        fill(0,0,0);
        text("1", 25, 140);
        text("2", 105, 140);
        text("3", 190, 140);
        text("4", 270, 140);
        text("5", 350, 140);
    }
    }
    if (screen === 13) {
        background(171, 25, 25);

        fill(0, 0, 0);
text(coin +" Gamz", 10, 50);
            fill(235, 127, 127);
        rect(325 - 11, 345- 100, 20, 12);
            ellipse(325, 300- 100, 100, 100);

            ellipse(325 - 45, 368 - 100, 25, 25);
            ellipse(325 + 45, 368 - 100, 25, 25);
            ellipse(325, 297 - 100, 10, 10);
            arc(325, 210, 50, 50, 27, 153);
                    fill(0, 0, 0);
            ellipse(325 - 22, 282 - 100, 10, 10);
            ellipse(325 + 23, 282 - 100, 10, 10);
            fill(255, 255, 0);
            arc(325, 300, 60, 95, 180, 360);
            fill(0, 0, 0);
            rect(275, 150, 100, 15);
            rect(290, 10, 70, 150);
            fill(13, 255, 0);
        rect(0, 300, 400, 100);
        fill(0, 0, 0);
        text("Back", 10, 15);
        if (shop === 1) {
        textSize(15);
        text("Hello, welcome to Jack's.", 20, 325);
        rect(10, 100, 80, 80, 15);
        rect(130, 100, 80, 80, 15);
        fill(255, 255, 255);
        text("Buy stuff", 10, 145); 
        text("Upgrade", 130, 138); 
        text("Stuff", 130, 152); 
        }
        if (shop === 2) {
            textSize(18);
        wait -= 1;
        rect(10, 100, 160, 80);  
        fill(255, 255, 255);
        text("Sword", 10, 120);
        text("20 gamz", 80, 120);
        fill(255, 0, 0);
        rect(20, 160, 140, 10);
        line(67, 160, 67, 170);
        line(114, 160, 114, 170);
        if (swordLvL >= 2) {
            fill(0, 255, 0);
            rect(20, 160, 47, 10);
            
        }
        if (swordLvL === 3) {
            fill(0, 255, 0);
            rect(67, 160, 47, 10);
            
        }
        }
        if (shop === 3) {
            rect(10, 130, 100, 100);
            fill(255, 255, 255);
            text("Potion", 20,145);
            text("5 Gamz", 20, 160);
        }
    }
    if (screen === 14) {
        if (houseHP1 < 0) {
            
         screen = 7;   
        }
        if (energy < 1) {
            HP -=0.3;
            
        }
        
    if (startAttack2 === false) {
        
        if (message === 19) {
        message = 20;
        energy += 35;
        }
    }
    if (energy > 100) {
        energy = 100;
    }
    // daStuff 
    {
        keyReleased = function(){
            if (keyCode === SHIFT) {
                if (sidetoside === false) {
                    sidetoside = true;
                } else {
                    sidetoside = false;
                }
                
            }
            
        };
        if (HP <= 0) {
           if (mrpotion === false) {
               screen = 6;
           } else {
               HP = 30;
           }
            }
            dead = 3600;
    background(0, 200, 255);
    if (gabe2 === true) {
       fill(0, 0, 0);
       rect(gabes2, 275, 10, 25);
       fill(252, 255, 163);
       ellipse(gabes2 + 5, 270, 15, 15);
       gabes2 += 0.5;
       line(gabes2 + 10, 285, gabes2 + 20, 300);
       fill(166, 96, 96);
       rect(gabes2 + 16, 298, 8, 2);
       if (gabes2 > 400) {
           screen = 4;
           keys[UP] = false;
       }
 }


    fill(166, 35, 35);
    rect(300, 200, 100 ,100);
    rect(350, 250, 30, 50);
    triangle(290, 200, 410, 200, 350, 150);
    fill(135, 107, 47);
    rect(-1, 300, 402, 101);
    fill(252, 255, 163);
    if (energy > 80 && HP <=  100) {
            HP += 0.075;
            energy -= 0.01;
        }
    if (keyIsPressed && keyCode === DOWN) {
        if (message === 21) {
            message = 22;
            
        }
        crouchRestore --;
        if (crouchRestore === 0) {
            crouchRestore = 15;
            energy += 1;
        }
         fill(2, 120, 2);
    rect(dudeX, dudeY + 10, 10, 15);
    fill(252, 255, 163);
        ellipse(dudeX + 5.5, dudeY + 5, 15, 15);
        dudeY = 275;
        jump = false;
    } else {
       fill(2, 120, 2);
    rect(dudeX, dudeY, 10, 25);
    fill(252, 255, 163);
    ellipse(dudeX + 5.5, dudeY - 5, 15, 15);
    }
    fill(255, 0, 0);
    ellipse(ded[0], 305, 10, 10);
    ellipse(ded[1], 305, 10, 10);
    ellipse(ded[2], 305, 10, 10);
    ellipse(ded[3], 305, 10, 10);
    ellipse(ded[4], 305, 10, 10);
    ellipse(ded[5], 305, 10, 10);
    ellipse(ded[6], 305, 10, 10);
    ellipse(ded[7], 305, 10, 10);
    ellipse(ded[8], 305, 10, 10);
    ellipse(ded[9], 310, 20, 20);
  var s = second(); 
  var m = minute(); 
  var h = hour(); 
    
  textFont(createFont("monospace", 20), 20);
if (message === 20) {
        fill(0, 0, 0);
        textSize(12.5);
        text("I think I can press Up to jump. I'll try it.", 13, 340);
        }
        if (message === 21) {
        fill(0, 0, 0);
        textSize(12.5);
        text("Maybe I can crouch by pressing Down.", 13, 340);

        }
        if (message === 22) {
            fill(0, 0, 0);
            textSize(12.5);
            text("what about releasing shift to swing my sword right?", 13, 340);
        }
  textSize(17);
  fill(0, 0, 0);
  text(padZero(h) + padZero(m) + padZero(s), 333, 21);
                if (keyIsPressed  && keyCode === LEFT) {
                dudeX -= 1.0;
            }
            if (keyIsPressed  && keyCode === RIGHT) {
                dudeX += 1.0;
            }
        if (keyIsPressed && keyCode === UP && jump === false) {
            jump = true;
        }
        if (jump === true) {
            if (message === 20) {
                message += 1;
            }
            if (dudeY > 250 && down === false) {
                dudeY -= 1;
            }
            if (dudeY === 250) {
                down = true;
                energy -= 1;
            }
            if (down === true && dudeY < 275) {
                dudeY += 1;
            }
            if (dudeY === 275 && down === true) {
                jump = false;
                down = false;
            }
            
        }
    }
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 30;
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
        if (startAttack2 === false){
            if (message === 22) {
        startAttack2 = true;
            }
        }
        }
        
            fill(255, 0, 0);
            rect(10, 10, HP * 1.5, 10); 
            fill(255, 255, 0);
            rect(10, 25, energy * 1.5, 10);
            fill(0, 255, 0);
            rect(300, 200, houseHP1*0.5, 10);
            reload += 0.5;
    if (startAttack2 === true) {
        reload += 1;
                fill(255, 255, 0);
            text(coin + " Gamz", 300, 100);
            text(xP + " xP", 300, 120);
    {

if (onetwostart[0] === 300) {
                houseHP1 -= 0.1;
                onetwostart[0] -= 1;
            }
            if (onetwostart[0] === dudeX) {
                HP -= 10;
                
            }
                if (onetwohp[0] > 0) {
                  fill(9, 161, 9);
        onetwostart[0] += 0.5;
        rect(onetwostart[0], 275, 10, 25);
        ellipse(onetwostart[0] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onetwostart[0], 260, onetwohp[0], 10);
        
   }
    else{
       if (onetwodead[0] === false) {
           ded[0] = onetwostart[0];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onetwodead[0] = true;
       }
       onetwostart[0] = -50;
       
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onetwostart[0] && swordX1 >= onetwostart[0]&& reload > 17-energy/10) {
                    onetwohp[0] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onetwostart[0] + 10 && swordX1 > onetwostart[0] &&  reload > 17- energy/10) {
                    onetwohp[0] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[0] + 30 && dudeX > onetwostart[0] && reload > 17-energy/10) {
                    onetwohp[0] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }
        if (onetwostart[1] === 300) {
                houseHP1 -= 0.1;
                onetwostart[1] -= 1;
            }
            if (onetwostart[1] === dudeX) {
                HP -= 10;
                
            }
                if (onetwohp[1] > 0) {
                  fill(9, 161, 9);
        onetwostart[1] += 0.5;
        rect(onetwostart[1], 275, 10, 25);
        ellipse(onetwostart[1] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onetwostart[1], 260, onetwohp[1], 10);
        
   }
    else{
       if (onetwodead[1] === false) {
           ded[1] = onetwostart[1];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onetwodead[1] = true;
       }
       onetwostart[1] = -50;
       
   }
        if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onetwostart[1] && swordX1 >= onetwostart[1]&& reload > 17-energy/10) {
                    onetwohp[1] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onetwostart[1] + 10 && swordX1 > onetwostart[1] &&  reload > 17- energy/10) {
                    onetwohp[1] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[1] + 30 && dudeX > onetwostart[1] && reload > 17-energy/10) {
                    onetwohp[1] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }
        {
        

               if (onetwostart[2] === 300) {
                houseHP1 -= 0.1;
                onetwostart[2] -= 1;
            }
           if (onetwostart[2] === dudeX) {
               HP -= 10;
               
           }
               if (onetwohp[2] > 0) {
                 fill(9, 161, 9);
       onetwostart[2] += 0.5;
       rect(onetwostart[2], 275, 10, 25);
       ellipse(onetwostart[2] + 5, 270, 15, 15);
       fill(255, 0, 0);
rect(onetwostart[2], 260, onetwohp[2], 10);
       
  }
    else{
      if (onetwodead[2] === false) {
          ded[2] = onetwostart[2];
       xP+= 5;
               message = 12;
               coin += 1;
       
               killedEnemy += 1;
          onetwodead[2] = true;
      }
      onetwostart[2] = -50;
      
  }
     if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onetwostart[2] && swordX1 >= onetwostart[2]&& reload > 17-energy/10) {
                    onetwohp[2] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onetwostart[2] + 10 && swordX1 > onetwostart[2] &&  reload > 17- energy/10) {
                    onetwohp[2] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[2] + 30 && dudeX > onetwostart[2] && reload > 17-energy/10) {
                    onetwohp[2] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }

    



    
            
               if (onetwostart[3] === 300) {
                houseHP1 -= 0.1;
                onetwostart[3] -= 1;
            }
           if (onetwostart[3] === dudeX) {
               HP -= 10;
               
           }
               if (onetwohp[3] > 0) {
                 fill(9, 161, 9);
       onetwostart[3] += 0.5;
       rect(onetwostart[3], 275, 10, 25);
       ellipse(onetwostart[3] + 5, 270, 15, 15);
       fill(255, 0, 0);
rect(onetwostart[3], 260, onetwohp[3], 10);
       
  }
    else{
      if (onetwodead[3] === false) {
          ded[3] = onetwostart[3];
       xP+= 5;
               message = 12;
               coin += 1;
       
               killedEnemy += 1;
          onetwodead[3] = true;
      }
      onetwostart[3] = -50;
      
  }
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onetwostart[3] && swordX1 >= onetwostart[3]&& reload > 17-energy/10) {
                    onetwohp[3] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onetwostart[3] + 10 && swordX1 > onetwostart[3] &&  reload > 17- energy/10) {
                    onetwohp[3] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[3] + 30 && dudeX > onetwostart[3] && reload > 17-energy/10) {
                    onetwohp[3] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }

    


 
          
               if (onetwostart[4] === 300) {
                houseHP1 -= 0.1;
                onetwostart[4] -= 1;
            }
           if (onetwostart[4] === dudeX) {
               HP -= 10;
               
           }
               if (onetwohp[4] > 0) {
                 fill(9, 161, 9);
       onetwostart[4] += 0.5;
       rect(onetwostart[4], 275, 10, 25);
       ellipse(onetwostart[4] + 5, 270, 15, 15);
       fill(255, 0, 0);
rect(onetwostart[4], 260, onetwohp[4], 10);
       
  }
    else{
      if (onetwodead[4] === false) {
          ded[4] = onetwostart[4];
       xP+= 5;
               message = 12;
               coin += 1;
       
               killedEnemy += 1;
          onetwodead[4] = true;
      }
      onetwostart[4] = -50;
      
  }
     if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onetwostart[4] && swordX1 >= onetwostart[4]&& reload > 17-energy/10) {
                    onetwohp[4] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onetwostart[4] + 10 && swordX1 > onetwostart[4] &&  reload > 17- energy/10) {
                    onetwohp[4] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[4] + 30 && dudeX > onetwostart[4] && reload > 17-energy/10) {
                    onetwohp[4] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }

    



          
               if (onetwostart[5] === 300) {
                houseHP1 -= 0.1;
                onetwostart[5] -= 1;
            }
           if (onetwostart[5] === dudeX) {
               HP -= 10;
               
           }
               if (onetwohp[5] > 0) {
                 fill(9, 161, 9);
       onetwostart[5] += 0.5;
       rect(onetwostart[5], 275, 10, 25);
       ellipse(onetwostart[5] + 5, 270, 15, 15);
       fill(255, 0, 0);
rect(onetwostart[5], 260, onetwohp[5], 10);
       
  }
    else{
      if (onetwodead[5] === false) {
          ded[5] = onetwostart[5];
       xP+= 5;
               message = 12;
               coin += 1;
       
               killedEnemy += 1;
          onetwodead[5] = true;
      }
      onetwostart[5] = -50;
      
  }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onetwostart[5] && swordX1 >= onetwostart[5]&& reload > 17-energy/10) {
                    onetwohp[5] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onetwostart[5] + 10 && swordX1 > onetwostart[5] &&  reload > 17- energy/10) {
                    onetwohp[5] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[5] + 30 && dudeX > onetwostart[5] && reload > 17-energy/10) {
                    onetwohp[5] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }



if (onetwostart[6] === 300) {
                houseHP1 -= 0.1;
                onetwostart[6] -= 1;
            }
           if (onetwostart[6] === dudeX) {
               HP -= 10;
               
           }
               if (onetwohp[6] > 0) {
                 fill(9, 161, 9);
       onetwostart[6] += 0.5;
       rect(onetwostart[6], 275, 10, 25);
       ellipse(onetwostart[6] + 5, 270, 15, 15);
       fill(255, 0, 0);
rect(onetwostart[6], 260, onetwohp[6], 10);
       
  }
    else{
      if (onetwodead[6] === false) {
          ded[6] = onetwostart[6];
       xP+= 5;
               message = 12;
               coin += 1;
       
               killedEnemy += 1;
          onetwodead[6] = true;
      }
      onetwostart[6] = -50;
      
  }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onetwostart[6] && swordX1 >= onetwostart[6]&& reload > 17-energy/10) {
                    onetwohp[6] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onetwostart[6] + 10 && swordX1 > onetwostart[6] &&  reload > 17- energy/10) {
                    onetwohp[6] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onetwostart[6] + 30 && dudeX > onetwostart[6] && reload > 17-energy/10) {
                    onetwohp[6] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }



          
               if (onetwostart[0] === 300) {
                houseHP1 -= 0.1;
                onetwostart[0] -= 1;
            }
           if (onetwostart[7] === dudeX) {
               HP -= 10;
               
           }
               if (onetwohp[7] > 0) {
                 fill(9, 161, 9);
       onetwostart[7] += 0.5;
       rect(onetwostart[7], 275, 10, 25);
       ellipse(onetwostart[7] + 5, 270, 15, 15);
       fill(255, 0, 0);
rect(onetwostart[7], 260, onetwohp[7], 10);
       
  }
    else{
      if (onetwodead[7] === false) {
          ded[7] = onetwostart[7];
       xP+= 5;
               message = 12;
               coin += 1;
       
               killedEnemy += 1;
          onetwodead[7] = true;
      }
      onetwostart[7] = -50;
      
  }
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
       var swordX1 = dudeX - 20;

       if (swordX1 < onetwostart[7] + 10 && swordX1 > onetwostart[7] &&  reload > 17- energy/10) {
                   onetwohp[7] -= dmg;
                   reload = 0;
                   energy -= 1;
               }
else if(dudeX < onetwostart[7] + 30 && dudeX > onetwostart[7] && reload > 17-energy/10) {
                   onetwohp[7] -= dmg;
                   reload = 0;
                   energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
    



          
               if (onetwostart[8] === 300) {
                houseHP1 -= 0.1;
                onetwostart[8] -= 1;
            }
           if (onetwostart[8] === dudeX) {
               HP -= 10;
               
           }
               if (onetwohp[8] > 0) {
                 fill(9, 161, 9);
       onetwostart[8] += 0.5;
       rect(onetwostart[8], 275, 10, 25);
       ellipse(onetwostart[8] + 5, 270, 15, 15);
       fill(255, 0, 0);
rect(onetwostart[8], 260, onetwohp[8], 10);
       
  }
    else{
      if (onetwodead[8] === false) {
          ded[8] = onetwostart[8];
       xP+= 5;
               message = 12;
               coin += 1;
       
               killedEnemy += 1;
          onetwodead[8] = true;
      }
      onetwostart[8] = -50;
      
  }
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
       var swordX1 = dudeX - 20;
       if (swordX1 < onetwostart[8] + 10 && swordX1 > onetwostart[8] &&  reload > 17- energy/10) {
                   onetwohp[8] -= dmg;
                   reload = 0;
                   energy -= 1;
               }
else if(dudeX < onetwostart[8] + 30 && dudeX > onetwostart[8] && reload > 17-energy/10) {
                   onetwohp[8] -= dmg;
                   reload = 0;
                   energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
    


 
        }
    

                if (onetwostart[9] >= 300) {
                houseHP1 -= 2;
                onetwostart[9] -= 1;
            }
            if (onetwostart[9] === dudeX) {
                HP -= 30;
                
            }
                if (onetwohp[9] > 0) {
                    if (armHP >=1){
                  fill(199, 199, 199);
                  onetwostart[9] += 0.2;
                    }
                    else{fill(9, 161, 9);
                    onetwostart[9] += 0.5;
                    }
        onetwostart[9] += 0.2;
        rect(onetwostart[9], 275, 10, 25);
        ellipse(onetwostart[9] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onetwostart[9], 260, onetwohp[9]/3, 10);
        
   }else{
       if (onetwodead[9] === false) {
           wave = 2;
           ded[9] = onetwostart[9];
        xP+= 25;
        HP = 100;
        gabe2 = true;
                coin += 6;
                killedEnemy += 1;
           onetwodead[9] = true;
           hours = 15;
           minutes = 30;
           completionCollection[1] = true;
           completeOrbs += 1;
       }
       onetwostart[9] = -50;
       
   }
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);

        if (swordX1 < onetwostart[9] + 10 && swordX1 > onetwostart[9] &&  reload > 17- energy/10) {
            if (armHP >=1){
                    onetwohp[9] -= (dmg - 5);
            }
            else {onetwohp[9]-=dmg;}
                    reload = 0;
                    energy -= 1;
                    armHP -= 1;
                }
else if(dudeX < onetwostart[9] + 30 && dudeX > onetwostart[9] && reload > 17-energy/10) {
                   if (armHP >=1){
                    onetwohp[9] -= (dmg - 5);
            }
            else {onetwohp[9]-=dmg;}
                    reload = 0;
                    energy -= 1;
                    armHP -= 1;
                
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
    if (gabes2 === ded[0]) {
    ded[0] = -20;
}
if (gabes2 === ded[1]) {
    ded[1] = -20;
}
if (gabes2 === ded[2]) {
    ded[2] = -20;
}
if (gabes2 === ded[3]) {
    ded[3] = -20;
}
if (gabes2 === ded[4]) {
    ded[4] = -20;
}
if (gabes2 === ded[5]) {
    ded[5] = -20;
}
if (gabes2 === ded[6]) {
    ded[6] = -20;
}
if (gabes2 === ded[7]) {
    ded[7] = -20;
}
if (gabes2 === ded[8]) {
    ded[8] = -20;
}
if (gabes2 > ded[9]) {
    ded[9] = -20;
    wave = 2;
}


        
    }
    }
    }
    if (screen === 15) {
        if (energy > 90 && HP < 
        90) {
            energy -= 0.1;
            HP += 0.05;
        }
        if (keys[LEFT] === true) {
                dudeX --;
            }
        if (keys[RIGHT] === true) {
            dudeX++;
        }
        
            if (keys[SHIFT] === true) {
                if (sidetoside === false) {
                    sidetoside = true;
                } else {
                    sidetoside = false;
                }
                
             }
            
        
        if (energy > 100) {
         energy = 100;   
        }
        
        background(153, 255, 255);
        fill(255, 0, 0);

            reload += 0.5;
    if (startAttack3 === true) {
        reload += 1;
                fill(255, 255, 0);
            text(coin + " Gamz", 300, 100);
            text(xP + " xP", 300, 120);
    }
    if (keyIsPressed && keyCode === DOWN) {
        if (message === 21) {
            message = 22;
            
        }
        crouchRestore --;
        if (crouchRestore === 0) {
            crouchRestore = 15;
            energy += 1;
        }
        fill(2, 120, 2);
    rect(dudeX, dudeY + 10, 10, 15);
    fill(252, 255, 163);
        ellipse(dudeX + 5.5, dudeY + 5, 15, 15);
        dudeY = 275;
        jump = false;
    } else {
       fill(2, 120, 2);
    rect(dudeX, dudeY, 10, 25);
    fill(252, 255, 163);
    ellipse(dudeX + 5.5, dudeY - 5, 15, 15);
    }
    
    fill(166, 35, 35);
    rect(300, 200, 100 ,100);
    rect(350, 250, 30, 50);
    triangle(290, 200, 410, 200, 350, 150);
    fill(135, 107, 47);
    rect(-1, 300, 402, 101);
    fill(255, 0, 0);
            rect(10, 10, HP * 1.5, 10); 
            fill(255, 255, 0);
            rect(10, 25, energy * 1.5, 10);
            fill(0, 255, 0);
            rect(300, 200, houseHP1*0.5, 10);
fill(0, 255, 0);
text(round(HP), 10, 20);
fill(0, 0, 255);
text(round(energy), 10, 35); 
fill(255, 0, 0);
text(round(houseHP1), 300, 210);
    {
  if (onethreestart[0] === 300) {
                houseHP1 -= 0.1;
                onethreestart[0] -= 1;
            }
            if (onethreestart[0] === dudeX) {
                HP -= 10;
                
            }
                if (onethreehp[0] > 0) {
                  fill(0, 255, 208);
                  if(onethreestart[0] < 50) {
        onethreestart[0] += 0.5;
        }
        rect(onethreestart[0],275, 10, 25);
        fill(255, 253, 135);
        ellipse(onethreestart[0] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onethreestart[0], 260, onethreehp[0], 10);
        fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[0]), onethreestart[0],270);
   }
    else{
       if (onethreedead[0] === false) {
           ded[0] = onethreestart[0];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onethreedead[0] = true;
       }
       onethreestart[0] = -50;
       
       
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onethreestart[0] && swordX1 >= onethreestart[0]&& reload > 17-energy/10) {
                    onetwohp[0] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onethreestart[0] + 10 && swordX1 > onethreestart[0] &&  reload > 17- energy/10) {
                    onethreehp[0] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onethreestart[0] + 30 && dudeX > onethreestart[0] && reload > 17-energy/10) {
                    onethreehp[0] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }
   //specAttac
   if (onethreehp[0] > 0) {
   fill(0, 255, 230);
    if (specAttac31[3] === true) {
    specAttac31[0] = dudeX;
    specAttac31[1] = 200;
    specAttac31[3] = false;
    ellipse(specAttac31[0], specAttac31[1], 10, 10);
    }
    else if (specAttac31[2] > 0 && specAttac31[3] === false) {
     specAttac31[2] -= 1;  
ellipse(specAttac31[0], specAttac31[1], 10, 10);
    } else if (specAttac31[1] < 300){
        specAttac31[1] += 1;
        ellipse(specAttac31[0], specAttac31[1], 10, 10);
        var idk = round(specAttac31[0]/10); var idk2 = round(dudeX/10);
        if (idk === idk2){
        HP -=0.1;
        }
    } else if (specAttac31[4] > 0) {
     specAttac31[4] -=1;  
     ellipse(specAttac31[0], specAttac31[1], 10, 10);
    } else {
        specAttac31 = [0, 200, 60, true, 30, 30];
    }
}
    }  
    {
    if (onethreestart[1] === 300) {
                houseHP1 -= 0.1;
                onethreestart[1] -= 1;
            }
            if (onethreestart[1] === dudeX) {
                HP -= 10;
                
            }
                if (onethreehp[1] > 0) {
                  fill(9, 161, 9);
        onethreestart[1] += 0.5;
        rect(onethreestart[1], 275, 10, 25);
        ellipse(onethreestart[1] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onethreestart[1], 260, onethreehp[1], 10);
        fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[1]), onethreestart[1],270);
   }
    else{
       if (onethreedead[1] === false) {
           ded[1] = onethreestart[1];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onethreedead[1] = true;
       }
       onethreestart[1] = -50;
       
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onethreestart[1] && swordX1 >= onethreestart[1]&& reload > 17-energy/10) {
                    onethreehp[1] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onethreestart[1] + 10 && swordX1 > onethreestart[1] &&  reload > 17- energy/10) {
                    onethreehp[1] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onethreestart[1] + 30 && dudeX > onethreestart[1] && reload > 17-energy/10) {
                    onethreehp[1] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }

    }
    {
if (onethreestart[2] === 300) {
                houseHP1 -= 0.1;
                onethreestart[2] -= 1;
            }
            if (onethreestart[2] === dudeX) {
                HP -= 10;
                
            }
                if (onethreehp[2] > 0) {
                  fill(9, 161, 9);
        onethreestart[2] += 0.5;
        rect(onethreestart[2], 275, 10, 25);
        ellipse(onethreestart[2] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onethreestart[2], 260, onethreehp[2], 10);
        fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[2]), onethreestart[2],270);
   }
    else{
       if (onethreedead[2] === false) {
           ded[2] = onethreestart[2];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onethreedead[2] = true;
       }
       onethreestart[2] = -50;
       
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onethreestart[2] && swordX1 >= onethreestart[2]&& reload > 17-energy/10) {
                    onethreehp[2] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onethreestart[2] + 10 && swordX1 > onethreestart[2] &&  reload > 17- energy/10) {
                    onethreehp[2] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onethreestart[2] + 30 && dudeX > onethreestart[2] && reload > 17-energy/10) {
                    onethreehp[2] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }
}
    {
if (onethreestart[3] === 300) {
            houseHP1 -= 0.1;
            onethreestart[3] -= 1;
        }
        if (onethreestart[3] === dudeX) {
            HP -= 10;
            
        }
            if (onethreehp[3] > 0) {
              fill(9, 161, 9);
    onethreestart[3] += 0.5;
    rect(onethreestart[3], 275, 10, 25);
    ellipse(onethreestart[3] + 5, 270, 15, 15);
    fill(255, 0, 0);
rect(onethreestart[3], 260, onethreehp[3], 10);
    fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[3]), onethreestart[3],270);
   }
	else{
if (onethreedead[3] === false) {
    ded[3] = onethreestart[3];
    xP+= 5;
            message = 12;
            coin += 1;
            rareChance = random(0, 100);
            killedEnemy += 1;
       onethreedead[3] = true;
   }
   onethreestart[3] = -50;
   
   }
     if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
    var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
    swordTimer = 60;
 
    if(dudeX < onethreestart[3] && swordX1 >= onethreestart[3]&& reload > 17-energy/10) {
            onethreehp[3] -= dmg;
                reload = 0;
               energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
	var swordX1 = dudeX + 25;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
}
   {
	if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
    var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
    swordTimer = 60;
    if (swordX1 < onethreestart[3] + 10 && swordX1 > onethreestart[3] &&  reload > 17- energy/10) {
                onethreehp[3] -= dmg;
                reload = 0;
                energy -= 1;
            }
else if(dudeX < onethreestart[3] + 30 && dudeX > onethreestart[3] && reload > 17-energy/10) {
                onethreehp[3] -= dmg;
                reload = 0;
                energy -= 1;
}
	}else if (swordTimer > 0 && jump === false && sidetoside === false) {
    var swordX1 = dudeX - 15;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
    } else if (jump === false) {
        fill(120, 52, 52);
    triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
     
    }else if (sidetoside === true && swordTimer > 0 && jump === false) {
        var swordX1 = dudeX + 15;
        fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
	}
   }
}
    {
if (onethreestart[4] === 300) {
            houseHP1 -= 0.1;
            onethreestart[4] -= 1;
    }
        if (onethreestart[4] === dudeX) {
            HP -= 10;
        }
            if (onethreehp[4] > 0) {
              fill(9, 161, 9);
    onethreestart[4] += 0.5;
    rect(onethreestart[4], 275, 10, 25);
    ellipse(onethreestart[4] + 5, 270, 15, 15);
    fill(255, 0, 0);
rect(onethreestart[4], 260, onethreehp[4], 10);
    fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[4]), onethreestart[4],270);

   }
	else{
   if (onethreedead[4] === false) {
       ded[4] = onethreestart[4];
    xP+= 5;
            message = 12;
            coin += 1;
            rareChance = random(0, 100);
            killedEnemy += 1;
    onethreedead[4] = true;
   }
   onethreestart[4] = -50;
   
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
    var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
    swordTimer = 60;
   
    if(dudeX < onethreestart[4] && swordX1 >= onethreestart[4]&& reload > 17-energy/10) {
                onethreehp[4] -= dmg;
                reload = 0;
                energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
var swordX1 = dudeX + 25;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
}
   {
	if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
    var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
    swordTimer = 60;
    if (swordX1 < onethreestart[4] + 10 && swordX1 > onethreestart[4] &&  reload > 17- energy/10) {
                onethreehp[4] -= dmg;
                reload = 0;
                energy -= 1;
            }
else if(dudeX < onethreestart[4] + 30 && dudeX > onethreestart[4] && reload > 17-energy/10) {
                onethreehp[4] -= dmg;
                reload = 0;
                energy -= 1;
}
	}else if (swordTimer > 0 && jump === false && sidetoside === false) {
    var swordX1 = dudeX - 15;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
	} else if (jump === false) {
        fill(120, 52, 52);
    triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
         
    }else if (sidetoside === true && swordTimer > 0 && jump === false) {
        var swordX1 = dudeX + 15;
        fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
    }
   }
}
    {
  if (onethreestart[5] === 300) {
                houseHP1 -= 0.1;
                onethreestart[5] -= 1;
            }
            if (onethreestart[5] === dudeX) {
                HP -= 10;
                
            }
                if (onethreehp[5] > 0) {
                  fill(0, 255, 208);
                  if(onethreestart[5] < 50) {
        onethreestart[5] += 0.5;
        }
        rect(onethreestart[5],275, 10, 25);
        fill(255, 253, 135);
        ellipse(onethreestart[5] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onethreestart[5], 260, onethreehp[5], 10);
        fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[5]), onethreestart[5],270);
   }
    else{
       if (onethreedead[5] === false) {
           ded[5] = onethreestart[5];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onethreedead[5] = true;
       }
       onethreestart[5] = -50;
       
       
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onethreestart[5] && swordX1 >= onethreestart[5]&& reload > 17-energy/10) {
                    onetwohp[5] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onethreestart[5] + 10 && swordX1 > onethreestart[5] &&  reload > 17- energy/10) {
                    onethreehp[5] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onethreestart[5] + 30 && dudeX > onethreestart[5] && reload > 17-energy/10) {
                    onethreehp[5] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }
   //specAttac
   if (onethreehp[5] > 0 && onethreestart[5] > 0) {
   fill(0, 255, 0);
    if (specAttac36[3] === true) {
    specAttac36[5] = dudeX;
    specAttac36[1] = 200;
    specAttac36[3] = false;
    ellipse(specAttac36[5], specAttac36[1], 10, 10);
    }
    else if (specAttac36[2] > 0 && specAttac36[3] === false) {
     specAttac36[2] -= 1;  
ellipse(specAttac36[5], specAttac36[1], 10, 10);
    } else if (specAttac36[1] < 300){
        specAttac36[1] += 1;
        ellipse(specAttac36[5], specAttac36[1], 10, 10);
        var idk6 = round(specAttac36[5]/10); var idk62 = round(dudeX/10);
        if (idk6 === idk62){
        HP -=0.1;
        }
    } else if (specAttac36[4] > 0) {
     specAttac36[4] -=1;  
     ellipse(specAttac36[5], specAttac36[1], 10, 10);
    } else {
        specAttac36 = [0, 200, 60, true, 30, 30];
    }
}
    } 
    {
if (onethreestart[6] === 300) {
            houseHP1 -= 0.1;
            onethreestart[6] -= 1;
    }
        if (onethreestart[6] === dudeX) {
            HP -= 10;
        }
            if (onethreehp[6] > 0) {
              fill(9, 161, 9);
    onethreestart[6] += 0.5;
    rect(onethreestart[6], 275, 10, 25);
    ellipse(onethreestart[6] + 5, 270, 15, 15);
    fill(255, 0, 0);
rect(onethreestart[6], 260, onethreehp[6], 10);
    fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[6]), onethreestart[6],270);

   }
	else{
   if (onethreedead[6] === false) {
       ded[6] = onethreestart[6];
    xP+= 5;
            message = 12;
            coin += 1;
            rareChance = random(0, 100);
            killedEnemy += 1;
    onethreedead[6] = true;
   }
   onethreestart[6] = -50;
   
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
    var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
    swordTimer = 60;
   
    if(dudeX < onethreestart[6] && swordX1 >= onethreestart[6]&& reload > 17-energy/10) {
                onethreehp[6] -= dmg;
                reload = 0;
                energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
var swordX1 = dudeX + 25;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
}
   {
	if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
    var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
    swordTimer = 60;
    if (swordX1 < onethreestart[6] + 10 && swordX1 > onethreestart[6] &&  reload > 17- energy/10) {
                onethreehp[6] -= dmg;
                reload = 0;
                energy -= 1;
            }
else if(dudeX < onethreestart[6] + 30 && dudeX > onethreestart[6] && reload > 17-energy/10) {
                onethreehp[6] -= dmg;
                reload = 0;
                energy -= 1;
}
	}else if (swordTimer > 0 && jump === false && sidetoside === false) {
    var swordX1 = dudeX - 15;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
	} else if (jump === false) {
        fill(120, 52, 52);
    triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
         
    }else if (sidetoside === true && swordTimer > 0 && jump === false) {
        var swordX1 = dudeX + 15;
        fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
    }
   }
}
    {
if (onethreestart[7] === 300) {
            houseHP1 -= 0.1;
            onethreestart[7] -= 1;
    }
        if (onethreestart[7] === dudeX) {
            HP -= 10;
        }
            if (onethreehp[7] > 0) {
              fill(9, 161, 9);
    onethreestart[7] += 0.5;
    rect(onethreestart[7], 275, 10, 25);
    ellipse(onethreestart[7] + 5, 270, 15, 15);
    fill(255, 0, 0);
rect(onethreestart[7], 260, onethreehp[7], 10);
    fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[7]), onethreestart[7],270);

   }
	else{
   if (onethreedead[7] === false) {
       ded[7] = onethreestart[7];
    xP+= 5;
            message = 12;
            coin += 1;
            rareChance = random(0, 100);
            killedEnemy += 1;
    onethreedead[7] = true;
   }
   onethreestart[7] = -50;
   
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
    var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
    swordTimer = 60;
   
    if(dudeX < onethreestart[7] && swordX1 >= onethreestart[7]&& reload > 17-energy/10) {
                onethreehp[7] -= dmg;
                reload = 0;
                energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
var swordX1 = dudeX + 25;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
}
   {
	if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
    var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
    swordTimer = 60;
    if (swordX1 < onethreestart[7] + 10 && swordX1 > onethreestart[7] &&  reload > 17- energy/10) {
                onethreehp[7] -= dmg;
                reload = 0;
                energy -= 1;
            }
else if(dudeX < onethreestart[7] + 30 && dudeX > onethreestart[7] && reload > 17-energy/10) {
                onethreehp[7] -= dmg;
                reload = 0;
                energy -= 1;
}
	}else if (swordTimer > 0 && jump === false && sidetoside === false) {
    var swordX1 = dudeX - 15;
    fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
	} else if (jump === false) {
        fill(120, 52, 52);
    triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
         
    }else if (sidetoside === true && swordTimer > 0 && jump === false) {
        var swordX1 = dudeX + 15;
        fill(196, 196, 196);
    triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
    swordTimer -= 0.5;
    }
   }
}
    {
  if (onethreestart[8] === 300) {
                houseHP1 -= 0.1;
                onethreestart[8] -= 1;
            }
            if (onethreestart[8] === dudeX) {
                HP -= 10;
                
            }
                if (onethreehp[8] > 0) {
                  fill(0, 255, 208);
                  if(onethreestart[8] < 50) {
        onethreestart[8] += 0.5;
        }
        rect(onethreestart[8],275, 10, 25);
        fill(255, 253, 135);
        ellipse(onethreestart[8] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onethreestart[8], 260, onethreehp[8], 10);
        fill(0, 255, 0);
        textSize(10);
        text(round(onethreehp[8]), onethreestart[8],270);
   }
    else{
       if (onethreedead[5] === false) {
           ded[5] = onethreestart[8];
        xP+= 5;
                message = 12;
                coin += 1;
                rareChance = random(0, 100);
                killedEnemy += 1;
           onethreedead[5] = true;
       }
       onethreestart[8] = -50;
       
       
   }
      if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === true){
        var swordX1 = dudeX + 30;
fill(196, 196, 196);
triangle(dudeX + 10, 290, dudeX+10, 280, swordX1, 285);
        swordTimer = 60;
       
        if(dudeX < onethreestart[8] && swordX1 >= onethreestart[8]&& reload > 17-energy/10) {
                    onetwohp[5] -= dmg;
                    reload = 0;
                    energy -= 1;
}
}else if (swordTimer > 0 && jump === false && sidetoside === true) {
    var swordX1 = dudeX + 25;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
}
   {
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);
        swordTimer = 60;
        if (swordX1 < onethreestart[8] + 10 && swordX1 > onethreestart[8] &&  reload > 17- energy/10) {
                    onethreehp[8] -= dmg;
                    reload = 0;
                    energy -= 1;
                }
else if(dudeX < onethreestart[8] + 30 && dudeX > onethreestart[8] && reload > 17-energy/10) {
                    onethreehp[8] -= dmg;
                    reload = 0;
                    energy -= 1;
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
   }
   //specAttac
   if (onethreehp[8] > 0 && onethreestart[8] > 0) {
   fill(0, 255, 0);
    if (specattac39[3] === true) {
    specattac39[5] = dudeX;
    specattac39[1] = 200;
    specattac39[3] = false;
    ellipse(specattac39[5], specattac39[1], 10, 10);
    }
    else if (specattac39[2] > 0 && specattac39[3] === false) {
     specattac39[2] -= 1;  
ellipse(specattac39[5], specattac39[1], 10, 10);
    } else if (specattac39[1] < 300){
        specattac39[1] += 1;
        ellipse(specattac39[5], specattac39[1], 10, 10);
        var idk9 = round(specattac39[5]/10); var idk92 = round(dudeX/10);
        if (idk9 === idk92){
        HP -=0.1;
        }
    } else if (specattac39[4] > 0) {
     specattac39[4] -=1;  
     ellipse(specattac39[5], specattac39[1], 10, 10);
    } else {
        specattac39 = [0, 200, 60, true, 30, 30];
    }
}
    }
    if (onethreehp[8] <= 0) {
    if (onethreestart[9] >= 300) {
                houseHP1 -= 2;
                onethreestart[9] -= 1;
            }
            if (onethreestart[9] === dudeX) {
                HP -= 30;
                
            }
                if (onethreehp[9] > 0) {
                    if (armHP2 >=1){
                  fill(199, 199, 199);
                  onethreestart[9] += 0.2;
                    }
                    else{fill(9, 161, 9);
                    onethreestart[9] += 0.5;
                    }
        onethreestart[9] += 0.2;
        rect(onethreestart[9], 275, 10, 25);
        ellipse(onethreestart[9] + 5, 270, 15, 15);
        fill(255, 0, 0);
rect(onethreestart[9], 260, onethreehp[9]/3, 10);
        
   }else{
       if (onethreedead[9] === false) {
           wave = 2;
           ded[9] = onethreestart[9];
        xP+= 25;
        HP = 100;
        gabe2 = true;
                coin += 6;
                killedEnemy += 1;
           onethreedead[9] = true;
           hours = 15;
           minutes = 30;
           completionCollection[1] = true;
           completeOrbs += 1;
       }
       onethreestart[9] = -50;
       
   }
    if (keyIsPressed && key.code === 32 && sword === true && jump === false && sidetoside === false){
        var swordX1 = dudeX - 20;
fill(196, 196, 196);
triangle(dudeX, 290, dudeX, 280, swordX1, 285);

        if (swordX1 < onethreestart[9] + 10 && swordX1 > onethreestart[9] &&  reload > 17- energy/10) {
            if (armHP >=1){
                    onethreehp[9] -= (dmg - 5);
            }
            else {onethreehp[9]-=dmg;}
                    reload = 0;
                    energy -= 1;
                    armHP2 -= 1;
                }
else if(dudeX < onethreestart[9] + 30 && dudeX > onethreestart[9] && reload > 17-energy/10) {
                   if (armHP >=1){
                    onethreehp[9] -= (dmg - 5);
            }
            else {onethreehp[9]-=dmg;}
                    reload = 0;
                    energy -= 1;
                    armHP2 -= 1;
                
}
    }else if (swordTimer > 0 && jump === false && sidetoside === false) {
        var swordX1 = dudeX - 15;
        fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        } else if (jump === false) {
            fill(120, 52, 52);
        triangle(dudeX + 1, 282, dudeX + 11, 282, dudeX + 5.5, 297);
             
        }else if (sidetoside === true && swordTimer > 0 && jump === false) {
            var swordX1 = dudeX + 15;
            fill(196, 196, 196);
        triangle(dudeX + 5, 290, dudeX + 5, 280, swordX1, 285);
        swordTimer -= 0.5;
        }
    }
    }
    if (screen === 16) {
        cutscene = 1;
        background(255, 255, 255);
        fill(0, 0, 0);
        textSize(80);
        text("Save Code", 10, 100);
        text(saveCode, 175, 280);
        triangle(175, 200, 225, 200, 200, 180);
        triangle(175, 300, 225, 300, 200, 320);
        rect(300, 350, 100, 50);
        fill(255, 255, 255);
        textSize(38);
        text("Enter", 300, 390);
        mouseReleased = function() {
            if (mouseX > 175 && mouseY > 180 && mouseX < 225 && mouseY < 200) {
                saveCode += 1;
            }
            if (mouseX > 175 && mouseY > 300 && mouseX < 225 && mouseY < 320) {
                saveCode -= 1;
            }
            if (mouseX > 300 && mouseY >350) {
                screen = 2;
            }
        };
        if (saveCode < 0) {
            saveCode = 0;
        }
        if (saveCode === 1) {
        wave = 1;
        coin = 25;
        }
        if (saveCode === 2) {
            wave = 1;
            coin = 5;
            swordLvL = 2;
            dmg = 11;
        }
        if (saveCode === 3) {
            wave = 2;
            coin = 20;
            swordLvL = 2;
            dmg = 11;
        }
        if (saveCode === 4) {
            wave = 2;
            coin = 0;
            swordLvL = 3;
            dmg = 12;
        }
    if (richOpen < 30) {
            richOpen += 1;
        }
    if (test === 0) {
    var testr = new richBall("Holy Land", 5);
    testr.spin();
}
    
}

};

}
            
//Other Games by Chocolate Covered Chickadees
/*
n/a
*/
