# EHack
https://www.youtube.com/watch?v=T2y_8PhzWdU&list=PL-2EBeDYMIbTJliOGvyS7yDqYdKfhzXmx&index=1&ab_channel=BugBytes

# Project Description:

# Authors (add links later)
- Alif
- Ryan
- Lucas
- Sylas

# How to run:



# Plan:
- We are going to use OpenAI Assistants API to create a virtual laboratory
- Connect it with a 3D interface with Needle Engine
- Automatically synthesize a team of agents to solve the problem
- Input problem, visualize the work of the virtual laboratory through the agents visualizing the chat bubbles and their work
- Have code interpreter agents that are running code, Principal Investigator agents to coordinate the activity

# 3D Interface:
- Needle Engine:
    - Basically allows us to do performant web rendering of 3D objects, built on top of three.js
    - We write in typescript, compiles to C#
- Have a programmatic interface for synthesis of scenes and agents working together
- Make it generic enough to work for many types of tasks
- Visualize all the backend events in the 3D interface

# System Architecture for AI Swarm Planning:
- Shared task planning space
    - 
- Shared knowledge base
    - Shared file base for assistants
        - Need to upload all the files to the API (might be slow? Try to upload small things first.)
- Shared communication space
    - JSON message passing?
- Shared execution space
    - They will be able to run code, python packages
    - automatic chemistry research how to? (TODO: link python packages)
        - python outputs in a feedback loop
            - how to talk to other agents about progress?
- agents should have different roles and personalities (parameterized by OCEAN)
- the agents should be synthesized based on the problem at hand
    - an agent that synthesizes other agents (agent designer?)

# Agent Designing Agent (ADA)
- This is a meta-agent that creates and manages other agents to tackle various sub-problems.
- Agent Synthesis:
    - ADA dynamically synthesizes other agents based on the specific problem-requirements.
- Task Analysis:
    - ADA breaks down the complex user task into tasks that individual agents, or groups of agents can solve.
    - Pseudoalgorithm:
        - Understand the problem.
        - Systematically reason about the problem.
        - Break down the problem into sub-problems.
        - Generates skill requirement lists for each sub-problem.
        - ADA will estimate the computational resources, time, data access required to solve each sub-problem.
        - ADA will generate (HIRE) Agent personalities that are best suited to solve each sub-problem, and will also define what they are supposed to be performant at, and generate metrics (KPIs) for managing the agents. (TODO: Agent Generation Function)
        - ADA will monitor performance of each agent, and re-synthesize (FIRE) agents as needed.

- Agent Customization:
    - Uses OpenAI Agents API (https://platform.openai.com/docs/assistants/overview)
    assistant = client.beta.assistants.create(
    name="Superalignment Researcher",
    instructions="You are an AI alignment researcher. Write and run code to align AI to human intentions.",
    tools=[{"type": "code_interpreter"}],
    model="gpt-4-1106-preview")

# Running an agent simulation:
- 1. Input problem (input_text: str)
- 2. Decompose 1. into sub problems (sub_problems: List[str])
- 3. Synthesize agents to solve sub problems using an *Agent Designing Agent (ADA)* (agents: List[Agent])
- 4. The agents should communicate with each other, introducing themselves to each other and the user. (agent_introductions: List[str])
- 5. The agents should each have a "research journal" summarizing their insights into the task at hand.
