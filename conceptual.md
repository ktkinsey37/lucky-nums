### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?

RESTful routing is a generally-accepted standard for how to create the architecture of websites such that different CRUD procedures can be easily identified

- What is a resource?

Any hardware or software system that has limited availability/usability

- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?

These would be two totally different methods of gathering information from the request, and could allow a malicious actor to manipulate incoming information. It could also cause problems with refreshing and causing form resubmission issues.

- What does idempotent mean? Which HTTP verbs are idempotent?

Idempotent means that when an operation is performed multiple times, it only changes the thing operated on once. GET, PUT, DELETE, AND HEAD are idempotent.

- What is the difference between PUT and PATCH?

PUT updates an entire resource (ie a totally updated, "new" instance of user) while PATCH updates small sections (ie a new "username" for the user)

- What is one way encryption?

The encryption can only realistically go one way. That is, somebody cannot take a hash and decrypt backwards to the password.

- What is the purpose of a `salt` when hashing a password?

A salt provides a small piece of random data from which the hashing algo can start (a salt with a hash = secure password). It can also be included in the hash itself to allow the algo a starting point when back-validating from the hash.

- What is the purpose of the Bcrypt module?

The Bcrypt module 

- What is the difference between authorization and authentication?

Authentication is the process of confirming a user is the user they claim to be. Authorization is identifying a particular user's permissions.
