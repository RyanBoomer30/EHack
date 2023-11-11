# EHack
https://www.youtube.com/watch?v=T2y_8PhzWdU&list=PL-2EBeDYMIbTJliOGvyS7yDqYdKfhzXmx&index=1&ab_channel=BugBytes

# Project Description:

# Authors (add links later)
- Alif
- Ryan
- Lucas
- Sylas


# Plan:
We are going to use OpenAI Assistants API to create a virtual laboratory
Connect it with a 3D interface with Needle Engine
Create an automatically synthesized team of agents to solve the problem
Input problem, visualize the work of the virtual laboratory through the agents visualizing the chat bubbles and their work
Have code interpreter agents that are running code, PI agents

# 3D Interface:
-Needle Engine:
    -Basically allows us to do performant web rendering of 3D objects, built on top of three.js
    -write in typescript, compiles to C#
-Have a programmatic interface for synthesis of scenes and agents working together
-Make it generic enough to work for many types of tasks

# System Architecture for AI Swarm Planning:
-Shared task planning space
-Shared knowledge base
-Shared communication space
-Shared execution space
    -They will be able to run code, python packages
    -automatic chemistry research how to?
        -python outputs in a feedback loop
            -how to talk to other agents about progress?
-agents should have different roles and personalities (parameterized by OCEAN)
-the agents should be synthesized based on the problem at hand
    -an agent that synthesizes other agents (agent designer?)
-