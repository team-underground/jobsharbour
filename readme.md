# Jobsharbour

Jobs Harbour is an online web based job listing site for both employers and job seekers. Its primary goal is to provide you upto date job information from all around Assam and the Northeast.

## Installation

```
git clone git@github.com:team-underground/jobsharbour
cd jobsharbour
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan db:seed
```

compile assets

```
npm install && npm run dev
```

## RoadMap

-   [ ] unit test
-   [x] publish to production ready
-   [x] newsletter
-   [x] make business emails
-   [x] database seeding
-   [x] dashboard
-   [x] algolia jobs page with filtering
-   [ ] ci/cd
