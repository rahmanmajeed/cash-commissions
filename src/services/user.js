function User(userId) {
    this.userId = userId;
    this.weekRecords = [];
    this.setWeekHistory = function (week, amount) {
        if (this.weekRecords[week]) {
            this.weekRecords[week].amount += amount;
        } else {
            this.weekRecords[week] = { week, amount };
        }
    };
    this.getWeekHistory = function (week) {
        if (this.weekRecords[week]) {
            return this.weekRecords[week].amount;
        }
        return 0;
    };
    this.isWeekLimitFull = function (week) {
        if (this.weekRecords[week]) {
            const result = this.weekRecords[week].amount >= CASH_OUT_WEEK_LIMIT;
            return result;
        }
        return false;
    };
}

export default User;
