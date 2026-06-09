import Company from "../models/Company.js";

export const createCompany = async (req, res) => {

  try {

    const company = await Company.create({

      companyName: req.body.companyName,

      website: req.body.website,

      logo: req.body.logo,

      description: req.body.description

    });

    res.status(201).json(company);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const getCompanies = async (req, res) => {

  try {

    const companies = await Company.find();

    res.json(companies);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};