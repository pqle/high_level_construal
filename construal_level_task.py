#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.1.2),
    on Wed Sep  2 09:47:14 2020
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.1.2'
expName = 'construal_level_task'  # from the Builder filename that created this script
expInfo = {'participant': '999'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/pnovak2/src/smoking/high_level_construal/construal_level_task.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[2560, 1440], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
instruction_text = visual.TextStim(win=win, name='instruction_text',
    text='Instruction text.\nHow to perform task.',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "cue"
cueClock = core.Clock()
cue_str = visual.TextStim(win=win, name='cue_str',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "action"
actionClock = core.Clock()
attention_check = visual.TextStim(win=win, name='attention_check',
    text='default text',
    font='Arial',
    pos=(0, 0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
action_text = visual.TextStim(win=win, name='action_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
attention_check_rating = visual.RatingScale(win=win, name='attention_check_rating', choices = ['not at all often','somewhat often','moderately often','very often','extremely often'], stretch=2.0, textSize=0.5, showAccept=False, maxTime=5, respKeys=['1','2','3','4','5'])

# Initialize components for Routine "scenario_cue"
scenario_cueClock = core.Clock()
scenario_cue_text = visual.TextStim(win=win, name='scenario_cue_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "scenario"
scenarioClock = core.Clock()
scenario_text = visual.TextStim(win=win, name='scenario_text',
    text='default text',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "quitting_intention"
quitting_intentionClock = core.Clock()
quitting_intention_text = visual.TextStim(win=win, name='quitting_intention_text',
    text='To what extent do these thoughts encourage or discourage you to smoke?',
    font='Arial',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
quitting_intention_rating = visual.RatingScale(win=win, name='quitting_intention_rating', choices = ['encourage a great deal','encourage a little','neither encourage nor discourage','discourage a little','discourage a great deal'], stretch=2.0, textSize=0.5, showAccept=False, maxTime=5, respKeys=['1','2','3','4','5'])

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
routineTimer.add(20.000000)
# update component parameters for each repeat
# keep track of which components have finished
instructionsComponents = [instruction_text]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instruction_text* updates
    if instruction_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instruction_text.frameNStart = frameN  # exact frame index
        instruction_text.tStart = t  # local t and not account for scr refresh
        instruction_text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instruction_text, 'tStartRefresh')  # time at next scr refresh
        instruction_text.setAutoDraw(True)
    if instruction_text.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > instruction_text.tStartRefresh + 20-frameTolerance:
            # keep track of stop time/frame for later
            instruction_text.tStop = t  # not accounting for scr refresh
            instruction_text.frameNStop = frameN  # exact frame index
            win.timeOnFlip(instruction_text, 'tStopRefresh')  # time at next scr refresh
            instruction_text.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)

# set up handler to look after randomisation of conditions etc
block = data.TrialHandler(nReps=1, method='random', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('choose_condition.csv'),
    seed=None, name='block')
thisExp.addLoop(block)  # add the loop to the experiment
thisBlock = block.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
if thisBlock != None:
    for paramName in thisBlock:
        exec('{} = thisBlock[paramName]'.format(paramName))

for thisBlock in block:
    currentLoop = block
    # abbreviate parameter names if possible (e.g. rgb = thisBlock.rgb)
    if thisBlock != None:
        for paramName in thisBlock:
            exec('{} = thisBlock[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    scenario_trials = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(scenario_file, selection=random(1) * 16),
        seed=None, name='scenario_trials')
    thisExp.addLoop(scenario_trials)  # add the loop to the experiment
    thisScenario_trial = scenario_trials.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisScenario_trial.rgb)
    if thisScenario_trial != None:
        for paramName in thisScenario_trial:
            exec('{} = thisScenario_trial[paramName]'.format(paramName))
    
    for thisScenario_trial in scenario_trials:
        currentLoop = scenario_trials
        # abbreviate parameter names if possible (e.g. rgb = thisScenario_trial.rgb)
        if thisScenario_trial != None:
            for paramName in thisScenario_trial:
                exec('{} = thisScenario_trial[paramName]'.format(paramName))
        
        # set up handler to look after randomisation of conditions etc
        action_trials = data.TrialHandler(nReps=1, method='random', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('action_conditions.csv', selection=random(3)*48 ),
            seed=None, name='action_trials')
        thisExp.addLoop(action_trials)  # add the loop to the experiment
        thisAction_trial = action_trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisAction_trial.rgb)
        if thisAction_trial != None:
            for paramName in thisAction_trial:
                exec('{} = thisAction_trial[paramName]'.format(paramName))
        
        for thisAction_trial in action_trials:
            currentLoop = action_trials
            # abbreviate parameter names if possible (e.g. rgb = thisAction_trial.rgb)
            if thisAction_trial != None:
                for paramName in thisAction_trial:
                    exec('{} = thisAction_trial[paramName]'.format(paramName))
            
            # ------Prepare to start Routine "cue"-------
            continueRoutine = True
            routineTimer.add(1.000000)
            # update component parameters for each repeat
            cue_str.setText(cue_text)
            # keep track of which components have finished
            cueComponents = [cue_str]
            for thisComponent in cueComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            cueClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "cue"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = cueClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=cueClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *cue_str* updates
                if cue_str.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    cue_str.frameNStart = frameN  # exact frame index
                    cue_str.tStart = t  # local t and not account for scr refresh
                    cue_str.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(cue_str, 'tStartRefresh')  # time at next scr refresh
                    cue_str.setAutoDraw(True)
                if cue_str.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > cue_str.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        cue_str.tStop = t  # not accounting for scr refresh
                        cue_str.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(cue_str, 'tStopRefresh')  # time at next scr refresh
                        cue_str.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in cueComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "cue"-------
            for thisComponent in cueComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            action_trials.addData('cue_str.started', cue_str.tStartRefresh)
            action_trials.addData('cue_str.stopped', cue_str.tStopRefresh)
            
            # ------Prepare to start Routine "action"-------
            continueRoutine = True
            routineTimer.add(5.000000)
            # update component parameters for each repeat
            attention_check.setText(attention_check_text)
            action_text.setText(action)
            attention_check_rating.reset()
            # keep track of which components have finished
            actionComponents = [attention_check, action_text, attention_check_rating]
            for thisComponent in actionComponents:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            actionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
            frameN = -1
            
            # -------Run Routine "action"-------
            while continueRoutine and routineTimer.getTime() > 0:
                # get current time
                t = actionClock.getTime()
                tThisFlip = win.getFutureFlipTime(clock=actionClock)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *attention_check* updates
                if attention_check.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attention_check.frameNStart = frameN  # exact frame index
                    attention_check.tStart = t  # local t and not account for scr refresh
                    attention_check.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attention_check, 'tStartRefresh')  # time at next scr refresh
                    attention_check.setAutoDraw(True)
                if attention_check.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > attention_check.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        attention_check.tStop = t  # not accounting for scr refresh
                        attention_check.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(attention_check, 'tStopRefresh')  # time at next scr refresh
                        attention_check.setAutoDraw(False)
                
                # *action_text* updates
                if action_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    action_text.frameNStart = frameN  # exact frame index
                    action_text.tStart = t  # local t and not account for scr refresh
                    action_text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(action_text, 'tStartRefresh')  # time at next scr refresh
                    action_text.setAutoDraw(True)
                if action_text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > action_text.tStartRefresh + 5-frameTolerance:
                        # keep track of stop time/frame for later
                        action_text.tStop = t  # not accounting for scr refresh
                        action_text.frameNStop = frameN  # exact frame index
                        win.timeOnFlip(action_text, 'tStopRefresh')  # time at next scr refresh
                        action_text.setAutoDraw(False)
                # *attention_check_rating* updates
                if attention_check_rating.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    attention_check_rating.frameNStart = frameN  # exact frame index
                    attention_check_rating.tStart = t  # local t and not account for scr refresh
                    attention_check_rating.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(attention_check_rating, 'tStartRefresh')  # time at next scr refresh
                    attention_check_rating.setAutoDraw(True)
                continueRoutine &= attention_check_rating.noResponse  # a response ends the trial
                
                # check for quit (typically the Esc key)
                if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                    core.quit()
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in actionComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # -------Ending Routine "action"-------
            for thisComponent in actionComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store data for action_trials (TrialHandler)
            action_trials.addData('attention_check_rating.response', attention_check_rating.getRating())
            action_trials.addData('attention_check_rating.rt', attention_check_rating.getRT())
            action_trials.addData('attention_check_rating.started', attention_check_rating.tStart)
            action_trials.addData('attention_check_rating.stopped', attention_check_rating.tStop)
            thisExp.nextEntry()
            
        # completed 1 repeats of 'action_trials'
        
        
        # ------Prepare to start Routine "scenario_cue"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        scenario_cue_text.setText(cue_text)
        # keep track of which components have finished
        scenario_cueComponents = [scenario_cue_text]
        for thisComponent in scenario_cueComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        scenario_cueClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "scenario_cue"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = scenario_cueClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=scenario_cueClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *scenario_cue_text* updates
            if scenario_cue_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                scenario_cue_text.frameNStart = frameN  # exact frame index
                scenario_cue_text.tStart = t  # local t and not account for scr refresh
                scenario_cue_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(scenario_cue_text, 'tStartRefresh')  # time at next scr refresh
                scenario_cue_text.setAutoDraw(True)
            if scenario_cue_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > scenario_cue_text.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    scenario_cue_text.tStop = t  # not accounting for scr refresh
                    scenario_cue_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(scenario_cue_text, 'tStopRefresh')  # time at next scr refresh
                    scenario_cue_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in scenario_cueComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "scenario_cue"-------
        for thisComponent in scenario_cueComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "scenario"-------
        continueRoutine = True
        routineTimer.add(30.000000)
        # update component parameters for each repeat
        scenario_text.setText(scenarios)
        # keep track of which components have finished
        scenarioComponents = [scenario_text]
        for thisComponent in scenarioComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        scenarioClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "scenario"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = scenarioClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=scenarioClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *scenario_text* updates
            if scenario_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                scenario_text.frameNStart = frameN  # exact frame index
                scenario_text.tStart = t  # local t and not account for scr refresh
                scenario_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(scenario_text, 'tStartRefresh')  # time at next scr refresh
                scenario_text.setAutoDraw(True)
            if scenario_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > scenario_text.tStartRefresh + 30.0-frameTolerance:
                    # keep track of stop time/frame for later
                    scenario_text.tStop = t  # not accounting for scr refresh
                    scenario_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(scenario_text, 'tStopRefresh')  # time at next scr refresh
                    scenario_text.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in scenarioComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "scenario"-------
        for thisComponent in scenarioComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "quitting_intention"-------
        continueRoutine = True
        routineTimer.add(5.000000)
        # update component parameters for each repeat
        quitting_intention_rating.reset()
        # keep track of which components have finished
        quitting_intentionComponents = [quitting_intention_text, quitting_intention_rating]
        for thisComponent in quitting_intentionComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        quitting_intentionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "quitting_intention"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = quitting_intentionClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=quitting_intentionClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *quitting_intention_text* updates
            if quitting_intention_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                quitting_intention_text.frameNStart = frameN  # exact frame index
                quitting_intention_text.tStart = t  # local t and not account for scr refresh
                quitting_intention_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(quitting_intention_text, 'tStartRefresh')  # time at next scr refresh
                quitting_intention_text.setAutoDraw(True)
            if quitting_intention_text.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > quitting_intention_text.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    quitting_intention_text.tStop = t  # not accounting for scr refresh
                    quitting_intention_text.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(quitting_intention_text, 'tStopRefresh')  # time at next scr refresh
                    quitting_intention_text.setAutoDraw(False)
            # *quitting_intention_rating* updates
            if quitting_intention_rating.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                quitting_intention_rating.frameNStart = frameN  # exact frame index
                quitting_intention_rating.tStart = t  # local t and not account for scr refresh
                quitting_intention_rating.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(quitting_intention_rating, 'tStartRefresh')  # time at next scr refresh
                quitting_intention_rating.setAutoDraw(True)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in quitting_intentionComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "quitting_intention"-------
        for thisComponent in quitting_intentionComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store data for scenario_trials (TrialHandler)
        scenario_trials.addData('quitting_intention_rating.response', quitting_intention_rating.getRating())
        scenario_trials.addData('quitting_intention_rating.rt', quitting_intention_rating.getRT())
        thisExp.nextEntry()
        
    # completed 1 repeats of 'scenario_trials'
    
    thisExp.nextEntry()
    
# completed 1 repeats of 'block'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
