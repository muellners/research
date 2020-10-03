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

## OAuth 1.0

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

## OAuth 2.0

OAuth 2.0 is the industry-standard protocol for authorization. OAuth 2.0 focuses
on client developer simplicity while providing specific authorization flows for
web applications, desktop applications, mobile phones, and living room devices.
An OAuth 2.0 Server is a piece of software that implements network protocol
flows which allow a client (piece of software) to act on behalf of a user.
Transport-dependent: Most security defenses are delegated to HTTPS/TLS. A typo,
an improper TLS configuration, a failure to properly validate a certificate, or
vulnerabilities in an underlying library can lead to a man-in-the-middle (MitM)
attack, compromising all OAuth communications. Centered around bearer tokens:
These are easy for integration but not great for security. Bearer tokens do not
provide internal security mechanisms. They can be copied or stolen but are
easier to implement. Much easier to work with: OAuth 2.0 is much more usable,
but much more difficult to build securely. Much more flexible: OAuth 1.0 only
handles web workflows, but OAuth 2.0 considers non-web clients as well. Better
separation of duties: Handling resource requests and handling user authorization
can be decoupled in OAuth 2.0. Basic signature workflow.

## OpenID

OpenID is an open standard and decentralized authentication protocol. Promoted
by the non-profit OpenID Foundation, it allows users to be authenticated by
co-operating sites (known as relying parties, or RP) using a third-party
service, eliminating the need for webmasters to provide their own ad hoc login
systems, and allowing users to log into multiple unrelated websites without
having to have a separate identity and password for each. Users create accounts
by selecting an OpenID identity provider and then use those accounts to sign
onto any website that accepts OpenID authentication. Several large organizations
either issue or accept OpenIDs on their websites, according to the OpenID
Foundation. The OpenID standard provides a framework for the communication that
must take place between the identity provider and the OpenID acceptor (the
"relying party"). An extension to the standard facilitates the transfer of user
attributes, such as name and gender, from the OpenID identity provider to the
relying party (each relying party may request a different set of attributes,
depending on its requirements). The OpenID protocol does not rely on a central
authority to authenticate a user's identity. Moreover, neither services nor the
OpenID standard may mandate a specific means by which to authenticate users,
allowing for approaches ranging from the common (such as passwords) to the novel
(such as smart cards or biometrics).

## List of notable OAuth service providers:

| Service Provider     | OAuth Protocol       | OpenID Connect |
| -------------------- | -------------------- | -------------- |
| 500px                | 1.0a                 |                |
| Amazon               | 2.0                  |                |
| Apple                | 2.0                  | Yes            |
| Basecamp             | 2.0                  | No             |
| Battle.net           | 2.0                  |                |
| Bitbucket            | 1.0a 2.0             | No             |
| bitly                | 2.0                  |                |
| Box                  | 2.0                  |                |
| Cloud Foundry        | 2.0                  |                |
| Dailymotion          | 2.0 draft 11         |                |
| Deutsche Telekom     | 2.0                  |                |
| deviantART           | 2.0 drafts 10 and 15 |                |
| Discogs              | 1.0a                 |                |
| Discord              | 2.0                  |                |
| Dropbox              | 1.0, 2.0             |                |
| Etsy                 | 1.0                  |                |
| Evernote             | 1.0a                 |                |
| Facebook             | 2.0 draft 12         | No             |
| FatSecret            | 1.0, 2.0             |                |
| Fitbit               | 2.0                  |                |
| Flickr               | 1.0a                 |                |
| Formstack            | 2.0                  |                |
| Foursquare           | 2.0                  |                |
| GitHub               | 2.0                  | No             |
| Goodreads            | 1.0                  |                |
| Google               | 2.0                  | Yes            |
| Google App Engine    | 1.0a, 2.0            | Yes            |
| Groundspeak          | 1.0                  |                |
| Huddle               | 2.0                  |                |
| Imgur                | 2.0                  |                |
| Instagram            | 2.0                  | No             |
| Intel Cloud Services | 2.0                  |                |
| Jive Software        | 1.0a, 2.0            |                |
| Keycloak             | 2.0                  | Yes            |
| LinkedIn             | 1.0a, 2.0            | No             |
| Microsoft            | 2.0                  | Yes            |
| Mixi                 | 1.0                  |                |
| MySpace              | 1.0a                 |                |
| Netflix              | 1.0a                 |                |
| NetIQ                | 1.0a, 2.0            | Yes            |
| Okta                 | 1.0a, 2.0            | Yes            |
| OpenAM               | 2.0                  |                |
| OpenStreetMap        | 1.0, 1.0a            |                |
| OpenTable            | 1.0a                 |                |
| ORCID                | 2.0                  |                |
| PayPal               | 2.0                  |                |
| Ping Identity        | 2.0                  |                |
| Pixiv                | 2.0                  |                |
| Plurk                | 1.0a                 |                |
| Reddit               | 2.0                  |                |
| Salesforce.com       | 1.0a, 2.0            | Yes            |
| Sina Weibo           | 2.0                  |                |
| Spotify              | 2.0                  | No             |
| Stack Exchange       | 2.0                  |                |
| StatusNet            | 1.0a                 |                |
| Strava               | 2.0                  |                |
| Stripe               | 2.0                  |                |
| Trello               | 1.0                  |                |
| Tumblr               | 1.0a                 |                |
| Twitch               | 2.0                  |                |
| Twitter              | 1.0a, 2.0            | No             |
| Ubuntu One           | 1.0                  | No             |
| Viadeo               | 2.0                  |                |
| Vimeo                | 2.0                  | No             |
| VK                   | 2.0                  | No             |
| WeChat               | 2.0                  | No             |
| Withings             | 1.0                  |                |
| Woocommerce          | 1.0a                 |                |
| Wordpress            | 1.0a                 |                |
| WSO2 Identity Server | 1.0a, 2.0            | Yes            |
| Xero                 | 1.0a                 |                |
| XING                 | 2.0                  |                |
| Yahoo!               | 1.0a, 2.0            |                |
| Yammer               | 2.0                  |                |
| Yandex               | 2.0                  |                |
| Yelp                 | 2.0                  |                |
