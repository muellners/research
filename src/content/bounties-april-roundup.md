---
layout: post
title: The Status of Bounties Plaftorm as of April 2021
image: img/callum-shaw-555357-unsplash.jpg
author: [Nasser Y.]
date: 2021-02-15T07:41:47.149Z
tags:
  - bounties
---

# Bounties Platform - April 2021 Report

Bounties platform is a bug bounty platform meant to promote and accelerate development on open-source projects through seamless collaboration between developers and sponsors and other developers as well.
Thus far, bounties have undergone development both at the UI and the backend level from its boilerplate template generated with [jhipster](https://www.jhipster.tech).

## Backed Level Changes

1. **API Documentation with Swagger:** The very first layer of integration at the backend level is automatic API endpoints documentation using swagger. Access swagger docs through [swagger-ui](http://localhost:8080/swagger-ui/index.html?configUrl=/v3/api-docs/swagger-config#).
2. **Payment Integration with Stripe:** Payment processing being a major piece of this product, ground work for payment processing was implemented using stripe. The integration set up a basis for performing the following operations using stripe; Create, confirm and fetch a payment intent and method. The API endpoint and their usage is documented in the swagger doc accessible at the URL above.
3. **Bounty Creation Life-Cycle:** The backend also supports basic CRUD (Create, Read, Update & Delete) operations on a bounty entity. The swagger doc page describes the bounty object and required parameters for each bounty CRUD operation.
4. **Containerized Deployment (Docker & Kubernetes):** The backend has undergone some preliminary deployment configurations using kubernetes. You can deploy an instance of bounties by following the [deployment guide] ([bounties/K8S-README.md at master · muellners/bounties (github.com)](https://github.com/muellners/bounties/blob/master/K8S-README.md)).
5. **Security and Authentication using GitHub Auth:** Bounties platform being an open-source tool will thus often require interaction with git & github. For this, the security layer of the platform has been made to use GitHub auth to directly get a link between users account and their GitHub integrations (issue events, pull requests events).
6. **Asynchronous Messages with Apache Kafka:** The backend also features basic events streaming from JIRA, a popular issue tracker and main issue tracker for Apache Fineract, the case study for bounty. This feature is only at the level of listening, no further action has been implemented for actions related to the events received.

## UI Level Changes

The UI is mostly still at a prototyping stage with no proper integration with the backend.
The UI features as of now; a landing page, a bounty listing page, a bounty details page and auth pages.

The project and major milestones are further documented in [this](https://docs.google.com/document/d/1_T_CmoDAXojC4NFIHh5JNbzDHgXpw0lrk6lELuhYOnM/edit?usp=sharing) doc.


