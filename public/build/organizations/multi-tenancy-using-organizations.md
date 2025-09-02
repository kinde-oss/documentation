
Kinde is designed to support most business models and structures, from single entities to large enterprises. You can [run multiple businesses](/build/set-up-options/run-multiple-businesses/) on the Kinde platform, and you can also use organizations to separately manage sub-entities and user groups - known as multi-tenanting.

## What is multi-tenancy?

Multi-tenancy is where a single instance of software (e.g. a business on Kinde), and its supporting infrastructure, can serve multiple customers.

There are a number of ways that multi-tenancy can be done:

- A single database with a tenant ID per tenant
- A single database with a schema per tenant (how Kinde does it)
- A database per tenant

At Kinde we use a single database with a schema per tenant, which means each customer shares the application and a single database, but each tenant’s data is isolated and remains invisible to other tenants.

## Who needs to use organizations?

If your business services businesses, who in turn service businesses or customers in a B2B2B or B2B2C model, you’ll need to set up organizations.

For example, you might be:

- a parent company running multiple stores, branches or membership groups.
- a service or SaaS company managing access to a platform for different businesses and their customers.
- a consultancy managing projects for different clients.

## Sample organization structure

The diagram below shows an example of an organization structure.

<img
  src="https://imagedelivery.net/skPPZTHzSlcslvHjesZQcQ/84dfbf3e-75bd-4f4a-d513-94088fc10100/public"
  alt=""
  width="672px"
  height="auto"
  fetchpriority="low"
  loading="lazy"
  decoding="async"
/>

An organizational structure outlines how certain activities are managed, including [user roles and permissions](/manage-users/roles-and-permissions/apply-roles-and-permissions-to-users/).

## User management in organizations

Organizations function to separate user groups or members, so you can separately control and manage access for them. Users can also belong to multiple organizations. For example, you may want freelancers or contractors to access all organizations.

User management at the organization level, lets you:

- Control who can access the organization
- Set roles and permissions for each user in the organization
