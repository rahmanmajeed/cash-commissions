# Project setup

### First clone this repository

```javascript
git clone https://github.com/rahmanmajeed/cash-commissions.git
```

### Run this command to install require dependency.

```javascript
npm install
or
yarn install
```

### To Run the project type.

```javascript
npm start inputFile.json

or
npm start
```

### To Run unit-testing in project use.

```javascript
npm run test
```
## Project summary

### For Cash In
Commission fee - 0.03% from total amount, but no more than 5.00 EUR.

### For Cash Out
There are different commission fees for cash out for natural and legal persons.

#### Natural Persons
Default commission fee - 0.3% from cash out amount.

1000.00 EUR per week (from monday to sunday) is free of charge.

If total cash out amount is exceeded - commission is calculated only from exceeded amount (that is, for 1000.00 EUR there is still no commission fee).

#### Legal persons
Commission fee - 0.3% from amount, but not less than 0.50 EUR for operation.

### Rounding
After calculating commission fee, it's rounded to the smallest currency item (for example, for EUR currency - cents) to upper bound (ceiled). For example, 0.023 EUR should be rounded to 3 Euro cents.