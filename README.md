# High level construal task

## Introduction

The High level construal task presents text stimuli to frame the participant's
thoughts in the present or the future, then presents a scenario around smoking.
This task is used in the Rethink Smoking study.

- Conditions: present or future.
- Block structure: Introduction text (20s). Then cue text (1s) and action text that requires a rating response (5s), repeated 3 times. Followed by cue text (1s), then a scenario (30s) that is displayed in text and audio, followed by a rating response of future quitting intention. 74s per block.
- Duration: 8 blocks = 592s total.

## How to run the task

The task is run using [PsychoPy](https://www.psychopy.org/). Fill in the participant identifier, the session number and the run number. Session 0 is a brief practice run, session 1 and 2 with runs 1, 2, 3 or 4 are in-scanner runs. The task will start automatically after that.

## Task description

The task consists of 8 blocks of `present` actions and scenarios or `future` actions and scenarios, randomized.
First, introduction text is displayed for 20s. The introduction text is
```
```
Then in each block, a cue is presented for 1s. In the `present` condition, the cue is
```
Please imagine the next events occurring RIGHT NOW
```
In the `future` condition, the cue is
```
Please imagine the next events occurring FIVE YEARS FROM NOW
```
Then an action text phrase is displayed, with an attention check question for 5s.
In the `present` condition, the question is
```
How often do you currently engage in this action?
```
In the `future` condition, the question is
```
How likely would you engage in this action five years from now?
```
A rating scale is also displayed (5s), with five possible responses on the scale
```
not at all often - somewhat often - moderately often - very often - extremely often
```
The participant uses the 1, 2, 3, 4, or 5 buttons on the keyboard to respond.
The cue, action, attention check question and rating are repeated 3 times.

Then a cue is displayed (1s). Then a scenario text is displayed (30s) while a recording of a reading of the text of the scenario is played. Then a rating scale is displayed (5s), with five possible responses on the scale
```
encourage a great deal - encourage a little - neither encourage nor discourage - discourage a little - discourage a great deal
```

### How to configure
This task is configured using several comma-separated values (.csv) files.
The first is the `choose_conditions.csv`. There are 4 entries, 2 indicating the
`present` condition and 2 indicating the `future` condition.
The 8 entries correspond to the 4 blocks that will be run.
The conditions are randomly selected without replacement.

The selection of one condition then selects the next file that configures the task,
either the `present_scenario_conditions.csv` or the `future_scenario_conditions.csv` files.
Each of these files contains 6 fields, `block1`, `block2`, `block3` which correspond
to the scenario text broken up into 3 different blocks for presentation, and `block1_audio`,
`block2_audio`, and `block3_audio` which are the names of the audio files of the recording
of each block of text.

The final configuration file is `action_conditions.csv`.
This file contains the 48 actions, from which 3 will be chosen in each trial,
to display to the participant to help frame their thinking in the `present` or `future` condition.

## Developer documentation
Created using [PsychoPy v2020.2.5](https://www.psychopy.org/)
