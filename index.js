'use strict'

//const insta = require('./func.js'); 
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1] Robot Like v.1",
        "[2] Robot Like v.2",
        "[3] Delete All Media",
        "[4] Unfollow All Following",
        "[5] Unfollow Who Not Followback",
        "[6] Follow Followers Target",
        "[7] Follow Account By Media",
        "[8] Follow Account By Hashtag",
        "[9] Follow Account By Location",
        "\n"
      ] 
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1] Robot Like v.1":
        const botlike = require('./RobotLike.v1.js');
        await botlike();
        break;

      case "[2] Robot Like v.2":
        const botlike2 = require('./RobotLike.v2.js');
        await botlike2();
        break;

      case "[3] Delete All Media":
        const dellallphoto = require('./DeleteAllMedia.js');
        await dellallphoto();
        break;

      case "[4] Unfollow All Following":
        const unfollall = require('./UnfollowAllFollowing.js');
        await unfollall();
        break;

      case "[5] Unfollow Who Not Followback":
        const unfollnotfollback = require('./UnfollowNotFollowback.js');
        await unfollnotfollback();
        break;

      case "[6] Follow Followers Target":
        const fftauto = require('./FollowFollowersTarget.js');
        await fftauto();
        break;

      case "[7] Follow Account By Media":
        const flmauto = require('./FollowAccountMedia.js');
        await flmauto();
        break;

      case "[8] Follow Account By Hashtag":
        const fah = require('./FollowAccountHashtag.js');
        await fah();
        break;

      case "[9] Follow Account By Location":
        const flaauto = require('./FollowAccountLocation.js');
        await flaauto();
        break;

      default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.cyan
 ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
 ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
 ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
 ╔╦╗┌─┐┌─┐┬  ┌─┐   © 2018
  ║ │ ││ ││  └─┐   SGBTeam
  ╩ └─┘└─┘┴─┘└─┘   -------
}
      `);

main()
