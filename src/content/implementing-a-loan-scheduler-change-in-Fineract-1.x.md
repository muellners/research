---
layout: post
title: Implementing a loan scheduler change in Fineract 1.x. Guide by Kaze
image: img/testimg-cover.jpg
author: [Nasser]
date: 2021-02-08T07:03:47.149Z
tags:
  - fineract
  - improvements
---

Fineract is a robust open-source platform for financial services. It
covers a variety of banking solutions including loan products. This
piece of guide focuses on a new Fineract improvement on its loan
scheduler. This allows us to configure a **semi monthly Loan Product and
run different semi monthly loan schedules.**

But first what, is a semi monthly product. As the name suggests, a semi
monthly product is a loan product that can be repaid twice each month
for the duration of the loan term, until its maturity. This involves
repayment divided into two equal halves for each month.

The need for a semi monthly product came up during a case study in 2020
that Muellners actively pursued and has the following base conditions:

-   A semi monthly product defines 2 days between the 1^st^ and the
    > 31^st^ of a month which will represent the 2 repayment dates for
    > each month of the loan term.

-   The difference of days between the 1^st^ and 2^nd^ repayment dates
    > must be at least 14 days or at most 18 days. This ensures each
    > repayment date is equidistant apart.

## How do you create a Bi Monthly Loan Product

To create a new loan product that qualifies as a semi monthly product,
it’s not very different from your standard loan product creation process
in the Mifos X client application. The process goes as follows:

-   Go to the products section on the admin page.

-   Select the loan product category and create a new loan product

-   Fill in your loan details

-   Under the terms tab, you can use the following sample values for a
    > demo case definition:

    -   Principal Amount: 10,000

    -   Number of repayments: 12

    -   Nominal Interest Rate: 0.777

    -   Repaid Every: 2, semi month

-   Your loan product terms should like this afterwards:

-   ![](media/image1.png){width="6.5in" height="3.6527777777777777in"}

-   Complete the remaining steps, review and submit your loan product.

You can now create a new loan account with the above loan product. You
can refer to this
[*guide*](https://docs.mifos.org/user-manual/for-operational-users-mifos-x-web-app/accounts-and-transactions/loan-accounts/how-to-create-a-loan-account-application).

Now, I will detail what happens under the hood for this new loan
scheduling feature to be possible. The loan scheduler in Fineract has
(so far) supported a few repayment frequency strategies i.e daily,
weekly, monthly. But, there is no support for a semi monthly repayment
strategy and to integrate this new feature successfully, some changes to
the Fineract infrastructure were made:

1.  **Database changes:** The following amendments were made to the
    > m\_loan,
    > m\_loan\_product,m\_loan\_repayment\_schedule.![ER Diagram](img/implementing-loan-scheduler/er-diagram.png){width="6.5in"
    > height="5.111111111111111in"}

2.  **Code changes:**

    a.  First and utmost was to add the 2 major components needed for
        > the semi monthly module which were the first and second
        > payment dates for the loan life cycle.

    b.  Corresponding fields were added to the UI for choosing a semi
        > monthly loan frequency and entering a start and end date.

    c.  semi monthly start date and end date were added to the API and
        > the appropriate validations of entered dates were added for
        > cases of a semi monthly loan.

    d.  Loan repayment frequency modes were extended to support semi
        > monthly loan definitions in addition to the already existing
        > definitions by adding the ***semi-monthly*** loan repayment
        > frequency term type.

    e.  A conditional logic was also introduced to set the states where
        > semi semi-monthly loan is used and performs payments
        > scheduling and other computations accordingly.

    f.  A new subroutine was introduced in the repayment schedule
        > generator to handle repayment schedule generation for a
        > semi-monthly loan which also includes loans.

    g.  Leap year criteria is also a tough part of the scheduler change
        > due to the unhandled support for leap years. This was fixed by
        > adding a conditional statement where appropriate scheduling
        > will be done for a leap year, that is instead of a last date
        > being the 28th, it will be the 29th instead.

The implementation will not be complete without testing. 2 major types
of tests were made; testing using the Fineract integration test
framework and testing using the Mifos X client.

You can refer to this
[*document*](https://docs.google.com/document/d/1JZShhE-pk_JBMMCd17pw_TKDgfLHq_w1_eeXIDMHb2g/edit)
for test coverage using the Fineract integration test framework

I created a YouTube video playlist also to present the test cases that I
covered for this module using the Mifos X client. You can check them out
[*here*](https://www.youtube.com/playlist?list=PLeYrfyYpmjaR9TylGfvj6TpUO_fAhDXuN).
