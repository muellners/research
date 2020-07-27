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

Running fineract application behind a proxy using Apache Load Balancer.

We have tested on these OS

1. Using ubuntu for remote deployment
2. For local deployment using Mac OS based machine. (10.15.4) (Setting up local deployment is easy on other OS too)

Toolset Support

1. JAVA 11.06
2. Docker and docker compose (You need to install docker and docker-compose based on your OS)
3. For Local development support you can use IntelliJ , or your choice of any IDE.

## History

Setting up Mifos x (when it was mifos x now its fineract) ,
Major trouble was setting it up since there was a lot of manual setting that was required, like setting up DB and setting SSL and opening many ports and then finally you end up seeing a community app.

This was an old way. Now we focus on the latest version of the fineract , many things have changed so far Mifos X donated the source code to apache and they call it fineract, sounds amazing.

Switching from Mifos x to fineract there were many things which were breaking. It was quite hard to run within IDE.

Eclipse is my choice for development, but now using IntelliJ is also a great choice (IntelliJ has a downside where it draws massive amount of processing unit)

<image>

## Which branch to use and How?

To have active changes from community, we will use  bleeding edge `develop` branch from [Github](https://github.com/apache/fineract). Remember if you like to play safe please use stable version (though in software world there is no such thing as stable version) ie 1.x (you can choose the release)

Setting up fineract is easy , but it breaks a lot , since its heavily transforming so you would be expecting something new to break and then you can head towards community to ask question.

#### Interesting observation

*  Mostly the build fail either you are not running the DB, or the community app cannot access https (_self signed cert_)
* Searching the mailing list is helpful before actually posting a question
* Double check your version of OS and java and toolset required.
* Find out if you are passing any value other then specified


#### Broad Category of Failure

I think one should spend time over solving the issue , usually i can categories them into following if one faces any issue

1. System issue
2. DB issue
3. Some bug exception
4. You are crazy and you don't know where to look (Get focused)

# Local setup

 IntelliJ offers inbuilt tools which supports  DB view (inbuilt query) JPA persistence schema , gradle scripts, and debugging , spring configuration

 On the other hand eclipse, was able to produce above configuration but with less presentation and slick User Interface.

Importing fineract as a gradle project  make sure you import the root dir, it will do everything on its own plus you need to specify the gradle wrapper properties file as it is supplied as a part of the source code.


### Local Mysql
Running mysql binary is not easy sometimes , running over docker is lot easier.

```
docker run --name mysql-5.7 -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mysql -d mysql:5.7
```

This is a good to go when you start your application now there are two approaches to do that , one through bash(command line) , and another using IDE configuration

Want to be the amazing personality , then run from IDE and or super amazing personality run from terminal;

`./gradlew bootRun`

 Debugging the application (debugging is fun) you can inspect  individual line of code and see whats going on with individual methods when you run the service or going through a piece of API.



### Local Setup Rebase

Rebasing is a must , for an eg: this case; You are developing a feature , and then on the origin upstream repo things have changed someone pushed or merged a new code  so now develop is on commit or several commit ahead , you gotta get the update rebased on your feature or else conflicts.

A word of advice about squashing , try to have several commits in one single commit before you open a new PR. I never got to know the use of squash , though its good and reduces the stress of the maintainer.

## Maintain two repos?

Your business rely on fineract but you have your own code ie not fit for the community (Usually we support that you try to generalise the work for OSS) now in that case what you could do is maintain two remotes and name them like upstream and personal.

`Keep the develop sync with your remote`

`Make sure that you rebase on the develop for your remote`

I find this approach really easy.

## Automated Deploy

Note : Fineract works on kubernetes

I have been using semaphore CI which can handle deployment over servers in real time, i was working on a project and i knew the integration was the water tight approach for any bug and issue in the code.

There are many approaches like using Github Actions.


### One piece of advice

Fineract 1.x is simple to use and work with.
