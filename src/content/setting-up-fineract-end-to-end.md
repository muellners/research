---
layout: post
title: Deploying fineract 1.x end to end for local and soft production
image: img/testimg-cover.jpg
author: [Saransh]
date: 2020-06-13T07:03:47.149Z
tags:
  - fineract
  - finscale
  - strategy
  - deployment
---

This post describes the long standing myth about various scenarios and covers the basic installation of fineract 1.x over local and soft production.
---

Ehh what is **soft production** ?

Meaning you can run the Fineract application behind a proxy using Apache Load Balancer.

We have tested on these OS.
1. Utilizing ubuntu for production deployment
2. For local development on  Mac OS based machine. (10.15.4) (Setting up local deployment is easy on other OS too)

Toolset Support

1. JAVA 11.06
2. Docker and docker-compose (You need to install docker and docker-compose based on your OS)
3. For Local development support, you can use IntelliJ or your choice of any IDE. (Eclipse is also lovely)

## History

Setting up can be uncertain;

Mifos X had a lot of different levels of configuration required.

Fineract has changed all of these concerns presently, and you can get it up running in just a few steps involving your local deployment and as well as production.

A lot has improved, specifically when it comes to terms of setting up the service.

Eclipse is my choice for development, but now using IntelliJ is also a great choice (IntelliJ has a downside where it draws a massive amount of processing unless you have the latest M or i9 processor )


## Which branch to use and How?

A tricky one.
To have functional changes from the community, we will use a bleeding-edge development branch from Github.  

Remember, if you like to play safe, please use the stable version (though in the software world there is no such thing as stable version) ie, 1.x (you can choose the release)

Setting up Fineract is easy, but it breaks a lot since it's heavily transforming, so you could expect something new to not working.

#### Interesting observation

* Mostly the build fail either you are not running the DB
* JAVA version is not right
* Searching the mailing list is helpful before actually posting a question
* Double-check your version of OS and java and the toolset required.
* Find out if you are passing any value other than then specified.


#### Broad Category of Failure

I think one should spend time-solving the issue. Usually, I can categories them into the following if one faces any issue

1. System issue
2. DB issue
3. Some bug exception
4. You are crazy and you don't know where to look (Get focused)

# Local setup

IntelliJ offers inbuilt tools that support DB view (inbuilt query) JPA persistence schema, Gradle scripts, and debugging, spring configuration.

On the other hand, Eclipse produced the above configuration but with less display, including a sloppy  User Interface. (Eclipse is a great tool :) )

Importing Fineract as a Gradle project, make sure you import the root dir. It will do everything on its own if you need to specify the Gradle wrapper properties file as sometimes it goes missing (I am not sure why it happens)

### Local Mysql
Running MySQL binary is not easy sometimes. Operating over docker is a lot easier.

```
docker run --name mysql-5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mysql -d mysql:5.7
```

You are good to go. Now start your application. There are two approaches: one through bash(command line) and another using IDE configuration.

Want to be an amazing personality, then run from IDE and or super amazing personality run from the terminal;

`./gradlew bootRun`

Debugging the application (debugging is fun), you can inspect an individual line of code and see what's going on with particular methods when running the service or going through a piece of API.

I would recommend debugging when tests are usually failing. An integration test is the best way to test your new code.



### Local Setup Rebase

You are developing a feature, and suddenly on the origin upstream repo, someone pushed or merged a new code, so now the develop branch is several commit ahead. You must get the update rebased on your feature or else conflicts.

I advise writing a small script that does it for you. After all, it can slip through your mind.

A word of advice about squashing,  try to have several commits in one single commit before opening a new PR. I never got to know the use of squash, though it's OK and reduces the maintainer's stress.


## Maintain two repos?

Your business relies on Fineract, and you have your code, i.e., not fit for the community (Usually, we support that you try to generalize the work for OSS). Now, in that case, you could maintain two remotes and name them upstream and personal.

`Keep the develop sync with your remote`

`Make sure that you rebase on the develop for your remote`

I find this approach  easy.

## Automated Deploy

Note : Fineract works on kubernetes

II have been using semaphore CI, which can handle deployment over servers in real-time, could use any other CI and CD.
1. Define steps like build steps
2. Cases like what happens if fails and passes the above steps
There are many approaches, including  Github Actions.


### One piece of advice

Fineract 1.x is simple to use and work.
