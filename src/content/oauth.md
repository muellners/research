---
layout: post
title: Studying OAuth Protocols for BitRupee
image: img/callum-shaw-555357-unsplash.jpg
author: [Advait M.]
date: 2020-07-01T07:03:47.149Z
tags:
  - blockchain
  - bitcoin
  - payment
  - oauth
  - auth
---

# OAuth Protocols

OAuth is an open standard for access delegation, commonly used as a way for
Internet users to grant websites or applications access to their information on
other websites but without giving them the passwords. OAuth provides clients a
"secure delegated access" to server resources on behalf of a resource owner. It
specifies a process for resource owners to authorize third-party access to their
server resources without sharing their credentials. Designed specifically to
work with Hypertext Transfer Protocol (HTTP), OAuth essentially allows access
tokens to be issued to third-party clients by an authorization server, with the
approval of the resource owner. The third party then uses the access token to
access the protected resources hosted by the resource server.

There are 3 main handlers in an OAuth transaction: the user, the consumer, and
the service provider.

- **Step 1** – The User Shows Intent
- **Step 2** – The Consumer Gets Permission
- **Step 3** – The User Is Redirected to the Service Provider
- **Step 4** – The User Gives Permission
- **Step 5** – The Consumer Obtains an Access Token
- **Step 6** – The Consumer Accesses the Protected Resource

OAuth 2.0 is a complete redesign from OAuth 1.0, and the two are not compatible.
OAuth 2.0 is faster and easier to implement. OAuth 1.0 used complicated
cryptographic requirements, only supported three flows, and did not scale. OAuth
2.0, on the other hand, has six flows for different types of applications and
requirements, and enables signed secrets over HTTPS. OAuth tokens no longer need
to be encrypted on the endpoints in 2.0 since they are encrypted in transit.

OAuth 1.0

- Transport-independent: Security is not delegated to HTTPS/TLS.
- Founded in cryptography, especially digital signatures: Digital signatures are
  used to prove the integrity and authenticity of a message. Digital signatures
  can ensure that a certain message was sent from a specific source and that the
  message and signature were not tampered with in any way. A signed message is
  tied to its origin. It cannot be tampered with or copied to another source,
  but client-side implementations can be especially complex.
- Messages are each individually cryptographically signed: If a single message
  within the communication is constructed or signed improperly, the entire
  transaction will be invalidated
- Basic signature workflow.
