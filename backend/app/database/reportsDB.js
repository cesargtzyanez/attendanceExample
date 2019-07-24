const DB = require('./index');
const bcrypt = require('bcrypt');
const tableName = 'reports';

class reportsDB {
  static getAllReports() {
    return DB.getAll(tableName);
  }

  static getReportBiId(reportId) {
    return DB.getBy(tableName,'id',reportId);
  }

  static getReportsByUserId(userId) {
    return DB.getBy(tableName,'userId',userId);
  }

  static createReport(report) {
    return DB.insertItem(tableName,{...report});
  }

}

module.exports = reportsDB;
