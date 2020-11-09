/***************************** 
 * Construal_Level_Task Test *
 *****************************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'construal_level_task';  // from the Builder filename that created this script
let expInfo = {'participant': '999'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const blockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(blockLoopBegin, blockLoopScheduler);
flowScheduler.add(blockLoopScheduler);
flowScheduler.add(blockLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.DEBUG);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.5';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instruction_text;
var key_resp;
var cueClock;
var cue_str;
var actionClock;
var action_text;
var attention_check;
var attention_check_rating;
var attention_check_keyboard;
var scenario_cueClock;
var scenario_cue_text;
var scenario1Clock;
var block1_text;
var block1_sound;
var scenario2Clock;
var block2_text;
var block2_sound;
var scenario3Clock;
var block3_text;
var block3_sound;
var quitting_intentionClock;
var quitting_intention_text;
var quitting_intention_rating;
var quitting_intention_keyboard;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: 'Instruction text.\nHow to perform task.',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "cue"
  cueClock = new util.Clock();
  cue_str = new visual.TextStim({
    win: psychoJS.window,
    name: 'cue_str',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "action"
  actionClock = new util.Clock();
  action_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'action_text',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  attention_check = new visual.TextStim({
    win: psychoJS.window,
    name: 'attention_check',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  attention_check_rating = new visual.Slider({
    win: psychoJS.window, name: 'attention_check_rating',
    size: [1.0, 0.025], pos: [0, (- 0.3)], units: 'height',
    labels: ['not at all\noften', 'somewhat\noften', 'moderately\noften', 'very\noften', 'extremely\noften'], ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -3, 
    flip: false,
  });
  
  attention_check_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "scenario_cue"
  scenario_cueClock = new util.Clock();
  scenario_cue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'scenario_cue_text',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Initialize components for Routine "scenario1"
  scenario1Clock = new util.Clock();
  block1_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block1_text',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  block1_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  block1_sound.setVolume(1);
  // Initialize components for Routine "scenario2"
  scenario2Clock = new util.Clock();
  block2_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block2_text',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  block2_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  block2_sound.setVolume(1);
  // Initialize components for Routine "scenario3"
  scenario3Clock = new util.Clock();
  block3_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'block3_text',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  block3_sound = new sound.Sound({
    win: psychoJS.window,
    value: 'A',
    secs: (- 1),
    });
  block3_sound.setVolume(1);
  // Initialize components for Routine "quitting_intention"
  quitting_intentionClock = new util.Clock();
  quitting_intention_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'quitting_intention_text',
    text: 'default text',
    font: 'Helvetica',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  quitting_intention_rating = new visual.Slider({
    win: psychoJS.window, name: 'quitting_intention_rating',
    size: [1.0, 0.025], pos: [0, (- 0.3)], units: 'height',
    labels: ['encourage\na great deal', 'encourage\na little', 'neither encourage\nnor discourage', 'discourage\na little', 'discourage\na great deal'], ticks: [1, 2, 3, 4, 5],
    granularity: 0, style: [visual.Slider.Style.TRIANGLE_MARKER],
    color: new util.Color('LightGray'), 
    fontFamily: 'HelveticaBold', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  quitting_intention_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    routineTimer.add(20.000000);
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instruction_text);
    instructionsComponents.push(key_resp);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var frameRemains;
var continueRoutine;
function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((instruction_text.status === PsychoJS.Status.STARTED || instruction_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      instruction_text.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((key_resp.status === PsychoJS.Status.STARTED || key_resp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['apostrophe'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var block;
var currentLoop;
function blockLoopBegin(blockLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  block = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'choose_condition.csv',
    seed: undefined, name: 'block'
  });
  psychoJS.experiment.addLoop(block); // add the loop to the experiment
  currentLoop = block;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBlock of block) {
    const snapshot = block.getSnapshot();
    blockLoopScheduler.add(importConditions(snapshot));
    const scenario_trialsLoopScheduler = new Scheduler(psychoJS);
    blockLoopScheduler.add(scenario_trialsLoopBegin, scenario_trialsLoopScheduler);
    blockLoopScheduler.add(scenario_trialsLoopScheduler);
    blockLoopScheduler.add(scenario_trialsLoopEnd);
    blockLoopScheduler.add(endLoopIteration(blockLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var scenario_trials;
function scenario_trialsLoopBegin(scenario_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  scenario_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, scenario_file, util.randint(low=0, high=15, size=1)),
    seed: undefined, name: 'scenario_trials'
  });
  psychoJS.experiment.addLoop(scenario_trials); // add the loop to the experiment
  currentLoop = scenario_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisScenario_trial of scenario_trials) {
    const snapshot = scenario_trials.getSnapshot();
    scenario_trialsLoopScheduler.add(importConditions(snapshot));
    const action_trialsLoopScheduler = new Scheduler(psychoJS);
    scenario_trialsLoopScheduler.add(action_trialsLoopBegin, action_trialsLoopScheduler);
    scenario_trialsLoopScheduler.add(action_trialsLoopScheduler);
    scenario_trialsLoopScheduler.add(action_trialsLoopEnd);
    scenario_trialsLoopScheduler.add(scenario_cueRoutineBegin(snapshot));
    scenario_trialsLoopScheduler.add(scenario_cueRoutineEachFrame(snapshot));
    scenario_trialsLoopScheduler.add(scenario_cueRoutineEnd(snapshot));
    scenario_trialsLoopScheduler.add(scenario1RoutineBegin(snapshot));
    scenario_trialsLoopScheduler.add(scenario1RoutineEachFrame(snapshot));
    scenario_trialsLoopScheduler.add(scenario1RoutineEnd(snapshot));
    scenario_trialsLoopScheduler.add(scenario2RoutineBegin(snapshot));
    scenario_trialsLoopScheduler.add(scenario2RoutineEachFrame(snapshot));
    scenario_trialsLoopScheduler.add(scenario2RoutineEnd(snapshot));
    scenario_trialsLoopScheduler.add(scenario3RoutineBegin(snapshot));
    scenario_trialsLoopScheduler.add(scenario3RoutineEachFrame(snapshot));
    scenario_trialsLoopScheduler.add(scenario3RoutineEnd(snapshot));
    scenario_trialsLoopScheduler.add(quitting_intentionRoutineBegin(snapshot));
    scenario_trialsLoopScheduler.add(quitting_intentionRoutineEachFrame(snapshot));
    scenario_trialsLoopScheduler.add(quitting_intentionRoutineEnd(snapshot));
    scenario_trialsLoopScheduler.add(endLoopIteration(scenario_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var action_trials;
function action_trialsLoopBegin(action_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  action_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'action_conditions.csv', util.randint(low=0, high=47, size=3)),
    seed: undefined, name: 'action_trials'
  });
  psychoJS.experiment.addLoop(action_trials); // add the loop to the experiment
  currentLoop = action_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisAction_trial of action_trials) {
    const snapshot = action_trials.getSnapshot();
    action_trialsLoopScheduler.add(importConditions(snapshot));
    action_trialsLoopScheduler.add(cueRoutineBegin(snapshot));
    action_trialsLoopScheduler.add(cueRoutineEachFrame(snapshot));
    action_trialsLoopScheduler.add(cueRoutineEnd(snapshot));
    action_trialsLoopScheduler.add(actionRoutineBegin(snapshot));
    action_trialsLoopScheduler.add(actionRoutineEachFrame(snapshot));
    action_trialsLoopScheduler.add(actionRoutineEnd(snapshot));
    action_trialsLoopScheduler.add(endLoopIteration(action_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function action_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(action_trials);

  return Scheduler.Event.NEXT;
}


function scenario_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(scenario_trials);

  return Scheduler.Event.NEXT;
}


function blockLoopEnd() {
  psychoJS.experiment.removeLoop(block);

  return Scheduler.Event.NEXT;
}


var cueComponents;
function cueRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'cue'-------
    t = 0;
    cueClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    cue_str.setText(('Please imagine the next events occurring ' + cue_text));
    // keep track of which components have finished
    cueComponents = [];
    cueComponents.push(cue_str);
    
    for (const thisComponent of cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function cueRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'cue'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *cue_str* updates
    if (t >= 0.0 && cue_str.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cue_str.tStart = t;  // (not accounting for frame time here)
      cue_str.frameNStart = frameN;  // exact frame index
      
      cue_str.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((cue_str.status === PsychoJS.Status.STARTED || cue_str.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      cue_str.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function cueRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'cue'-------
    for (const thisComponent of cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var attention_check_text;
var _attention_check_keyboard_allKeys;
var actionComponents;
function actionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'action'-------
    t = 0;
    actionClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    if ((condition_type === "present")) {
        attention_check_text = "How often do you currently engage in this action?";
    } else {
        attention_check_text = "How likely would you engage in this action five years from now?";
    }
    
    action_text.setText(action);
    attention_check.setText(attention_check_text);
    attention_check_rating.reset()
    attention_check_keyboard.keys = undefined;
    attention_check_keyboard.rt = undefined;
    _attention_check_keyboard_allKeys = [];
    // keep track of which components have finished
    actionComponents = [];
    actionComponents.push(action_text);
    actionComponents.push(attention_check);
    actionComponents.push(attention_check_rating);
    actionComponents.push(attention_check_keyboard);
    
    for (const thisComponent of actionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var rating_keys;
function actionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'action'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = actionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    rating_keys = ["1", "2", "3", "4", "5"];
    if (_pj.in_es6(attention_check_keyboard.keys, rating_keys)) {
        attention_check_rating.markerPos = Number.parseInt(attention_check_keyboard.keys);
        attention_check_rating.rating = attention_check_rating.markerPos;
    }
    
    
    // *action_text* updates
    if (t >= 0.0 && action_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      action_text.tStart = t;  // (not accounting for frame time here)
      action_text.frameNStart = frameN;  // exact frame index
      
      action_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((action_text.status === PsychoJS.Status.STARTED || action_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      action_text.setAutoDraw(false);
    }
    
    // *attention_check* updates
    if (t >= 0.0 && attention_check.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attention_check.tStart = t;  // (not accounting for frame time here)
      attention_check.frameNStart = frameN;  // exact frame index
      
      attention_check.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((attention_check.status === PsychoJS.Status.STARTED || attention_check.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      attention_check.setAutoDraw(false);
    }
    
    // *attention_check_rating* updates
    if (t >= 0.0 && attention_check_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attention_check_rating.tStart = t;  // (not accounting for frame time here)
      attention_check_rating.frameNStart = frameN;  // exact frame index
      
      attention_check_rating.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((attention_check_rating.status === PsychoJS.Status.STARTED || attention_check_rating.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      attention_check_rating.setAutoDraw(false);
    }
    
    // *attention_check_keyboard* updates
    if (t >= 0.0 && attention_check_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attention_check_keyboard.tStart = t;  // (not accounting for frame time here)
      attention_check_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { attention_check_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { attention_check_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { attention_check_keyboard.clearEvents(); });
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((attention_check_keyboard.status === PsychoJS.Status.STARTED || attention_check_keyboard.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      attention_check_keyboard.status = PsychoJS.Status.FINISHED;
  }

    if (attention_check_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = attention_check_keyboard.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _attention_check_keyboard_allKeys = _attention_check_keyboard_allKeys.concat(theseKeys);
      if (_attention_check_keyboard_allKeys.length > 0) {
        attention_check_keyboard.keys = _attention_check_keyboard_allKeys[_attention_check_keyboard_allKeys.length - 1].name;  // just the last key pressed
        attention_check_keyboard.rt = _attention_check_keyboard_allKeys[_attention_check_keyboard_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of actionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function actionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'action'-------
    for (const thisComponent of actionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('attention_check_rating.response', attention_check_rating.getRating());
    psychoJS.experiment.addData('attention_check_rating.rt', attention_check_rating.getRT());
    psychoJS.experiment.addData('attention_check_keyboard.keys', attention_check_keyboard.keys);
    if (typeof attention_check_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('attention_check_keyboard.rt', attention_check_keyboard.rt);
        }
    
    attention_check_keyboard.stop();
    return Scheduler.Event.NEXT;
  };
}


var scenario_cueComponents;
function scenario_cueRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'scenario_cue'-------
    t = 0;
    scenario_cueClock.reset(); // clock
    frameN = -1;
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    scenario_cue_text.setText(('Please imagine the next events occurring ' + cue_text));
    // keep track of which components have finished
    scenario_cueComponents = [];
    scenario_cueComponents.push(scenario_cue_text);
    
    for (const thisComponent of scenario_cueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario_cueRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'scenario_cue'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = scenario_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *scenario_cue_text* updates
    if (t >= 0.0 && scenario_cue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scenario_cue_text.tStart = t;  // (not accounting for frame time here)
      scenario_cue_text.frameNStart = frameN;  // exact frame index
      
      scenario_cue_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((scenario_cue_text.status === PsychoJS.Status.STARTED || scenario_cue_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      scenario_cue_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scenario_cueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario_cueRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'scenario_cue'-------
    for (const thisComponent of scenario_cueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var scenario1Components;
function scenario1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'scenario1'-------
    t = 0;
    scenario1Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    block1_text.setText(block1);
    block1_sound = new sound.Sound({
    win: psychoJS.window,
    value: block1_audio,
    secs: -1,
    });
    block1_sound.setVolume(1);
    // keep track of which components have finished
    scenario1Components = [];
    scenario1Components.push(block1_text);
    scenario1Components.push(block1_sound);
    
    for (const thisComponent of scenario1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'scenario1'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = scenario1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block1_text* updates
    if (t >= 0.0 && block1_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1_text.tStart = t;  // (not accounting for frame time here)
      block1_text.frameNStart = frameN;  // exact frame index
      
      block1_text.setAutoDraw(true);
    }

    if ((block1_text.status === PsychoJS.Status.STARTED || block1_text.status === PsychoJS.Status.FINISHED) && Boolean((block1_sound.status == FINISHED))) {
      block1_text.setAutoDraw(false);
    }
    // start/stop block1_sound
    if (t >= 0.0 && block1_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block1_sound.tStart = t;  // (not accounting for frame time here)
      block1_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ block1_sound.play(); });  // screen flip
      block1_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (block1_sound.getDuration() + block1_sound.tStart)     && block1_sound.status === PsychoJS.Status.STARTED) {
      block1_sound.stop();  // stop the sound (if longer than duration)
      block1_sound.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scenario1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'scenario1'-------
    for (const thisComponent of scenario1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    block1_sound.stop();  // ensure sound has stopped at end of routine
    // the Routine "scenario1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var scenario2Components;
function scenario2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'scenario2'-------
    t = 0;
    scenario2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    block2_text.setText(block2);
    block2_sound = new sound.Sound({
    win: psychoJS.window,
    value: block2_audio,
    secs: -1,
    });
    block2_sound.setVolume(1);
    // keep track of which components have finished
    scenario2Components = [];
    scenario2Components.push(block2_text);
    scenario2Components.push(block2_sound);
    
    for (const thisComponent of scenario2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'scenario2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = scenario2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block2_text* updates
    if (t >= 0.0 && block2_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block2_text.tStart = t;  // (not accounting for frame time here)
      block2_text.frameNStart = frameN;  // exact frame index
      
      block2_text.setAutoDraw(true);
    }

    if ((block2_text.status === PsychoJS.Status.STARTED || block2_text.status === PsychoJS.Status.FINISHED) && Boolean((block2_sound.status == FINISHED))) {
      block2_text.setAutoDraw(false);
    }
    // start/stop block2_sound
    if (t >= 0.0 && block2_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block2_sound.tStart = t;  // (not accounting for frame time here)
      block2_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ block2_sound.play(); });  // screen flip
      block2_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (block2_sound.getDuration() + block2_sound.tStart)     && block2_sound.status === PsychoJS.Status.STARTED) {
      block2_sound.stop();  // stop the sound (if longer than duration)
      block2_sound.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scenario2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'scenario2'-------
    for (const thisComponent of scenario2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    block2_sound.stop();  // ensure sound has stopped at end of routine
    // the Routine "scenario2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var scenario3Components;
function scenario3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'scenario3'-------
    t = 0;
    scenario3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    block3_text.setText(block3);
    block3_sound = new sound.Sound({
    win: psychoJS.window,
    value: block3_audio,
    secs: -1,
    });
    block3_sound.setVolume(1);
    // keep track of which components have finished
    scenario3Components = [];
    scenario3Components.push(block3_text);
    scenario3Components.push(block3_sound);
    
    for (const thisComponent of scenario3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'scenario3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = scenario3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *block3_text* updates
    if (t >= 0.0 && block3_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block3_text.tStart = t;  // (not accounting for frame time here)
      block3_text.frameNStart = frameN;  // exact frame index
      
      block3_text.setAutoDraw(true);
    }

    if ((block3_text.status === PsychoJS.Status.STARTED || block3_text.status === PsychoJS.Status.FINISHED) && Boolean((block3_sound.status == FINISHED))) {
      block3_text.setAutoDraw(false);
    }
    // start/stop block3_sound
    if (t >= 0.0 && block3_sound.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      block3_sound.tStart = t;  // (not accounting for frame time here)
      block3_sound.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ block3_sound.play(); });  // screen flip
      block3_sound.status = PsychoJS.Status.STARTED;
    }
    if (t >= (block3_sound.getDuration() + block3_sound.tStart)     && block3_sound.status === PsychoJS.Status.STARTED) {
      block3_sound.stop();  // stop the sound (if longer than duration)
      block3_sound.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scenario3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function scenario3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'scenario3'-------
    for (const thisComponent of scenario3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    block3_sound.stop();  // ensure sound has stopped at end of routine
    // the Routine "scenario3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var quitting_intention_str;
var _quitting_intention_keyboard_allKeys;
var quitting_intentionComponents;
function quitting_intentionRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'quitting_intention'-------
    t = 0;
    quitting_intentionClock.reset(); // clock
    frameN = -1;
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    if ((condition_type === "present")) {
        quitting_intention_str = "Consider the thoughts that would go through your mind if you were in this situation right now.\n\nTo what extent do these thoughts encourage or discourage you to smoke?";
    } else {
        quitting_intention_str = "Consider the thoughts that would go through your mind if you are in this situation five years from now.\n\nTo what extent do these thoughts encourage or discourage you to smoke?";
    }
    
    quitting_intention_text.setText(quitting_intention_str);
    quitting_intention_rating.reset()
    quitting_intention_keyboard.keys = undefined;
    quitting_intention_keyboard.rt = undefined;
    _quitting_intention_keyboard_allKeys = [];
    // keep track of which components have finished
    quitting_intentionComponents = [];
    quitting_intentionComponents.push(quitting_intention_text);
    quitting_intentionComponents.push(quitting_intention_rating);
    quitting_intentionComponents.push(quitting_intention_keyboard);
    
    for (const thisComponent of quitting_intentionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function quitting_intentionRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'quitting_intention'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = quitting_intentionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    rating_keys = ["1", "2", "3", "4", "5"];
    if (_pj.in_es6(quitting_intention_keyboard.keys, rating_keys)) {
        quitting_intention_rating.markerPos = Number.parseInt(quitting_intention_keyboard.keys);
        quitting_intention_rating.rating = quitting_intention_rating.markerPos;
    }
    
    
    // *quitting_intention_text* updates
    if (t >= 0.0 && quitting_intention_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quitting_intention_text.tStart = t;  // (not accounting for frame time here)
      quitting_intention_text.frameNStart = frameN;  // exact frame index
      
      quitting_intention_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((quitting_intention_text.status === PsychoJS.Status.STARTED || quitting_intention_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      quitting_intention_text.setAutoDraw(false);
    }
    
    // *quitting_intention_rating* updates
    if (t >= 0.0 && quitting_intention_rating.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quitting_intention_rating.tStart = t;  // (not accounting for frame time here)
      quitting_intention_rating.frameNStart = frameN;  // exact frame index
      
      quitting_intention_rating.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((quitting_intention_rating.status === PsychoJS.Status.STARTED || quitting_intention_rating.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      quitting_intention_rating.setAutoDraw(false);
    }
    
    // *quitting_intention_keyboard* updates
    if (t >= 0.0 && quitting_intention_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      quitting_intention_keyboard.tStart = t;  // (not accounting for frame time here)
      quitting_intention_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { quitting_intention_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { quitting_intention_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { quitting_intention_keyboard.clearEvents(); });
    }

    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((quitting_intention_keyboard.status === PsychoJS.Status.STARTED || quitting_intention_keyboard.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      quitting_intention_keyboard.status = PsychoJS.Status.FINISHED;
  }

    if (quitting_intention_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = quitting_intention_keyboard.getKeys({keyList: ['1', '2', '3', '4', '5'], waitRelease: false});
      _quitting_intention_keyboard_allKeys = _quitting_intention_keyboard_allKeys.concat(theseKeys);
      if (_quitting_intention_keyboard_allKeys.length > 0) {
        quitting_intention_keyboard.keys = _quitting_intention_keyboard_allKeys[_quitting_intention_keyboard_allKeys.length - 1].name;  // just the last key pressed
        quitting_intention_keyboard.rt = _quitting_intention_keyboard_allKeys[_quitting_intention_keyboard_allKeys.length - 1].rt;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of quitting_intentionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quitting_intentionRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'quitting_intention'-------
    for (const thisComponent of quitting_intentionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('quitting_intention_rating.response', quitting_intention_rating.getRating());
    psychoJS.experiment.addData('quitting_intention_rating.rt', quitting_intention_rating.getRT());
    psychoJS.experiment.addData('quitting_intention_keyboard.keys', quitting_intention_keyboard.keys);
    if (typeof quitting_intention_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('quitting_intention_keyboard.rt', quitting_intention_keyboard.rt);
        }
    
    quitting_intention_keyboard.stop();
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
