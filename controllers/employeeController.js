const Employee = require("../models/Employee");

// Create employee
exports.createEmployee = async (req, res) => {
  try {
    const { name, gender, mobileNo, alternateMobileNo, active } = req.body;

    if (!name || !mobileNo) {
      return res
        .status(400)
        .json({ message: "Name and mobile number are required" });
    }

    const employee = new Employee({
      name,
      gender,
      mobileNo,
      alternateMobileNo,
      active,
    });

    await employee.save();
    res.status(201).json({
      message: "Employee created successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all employees
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json({
      message: "Employees fetched successfully",
      employees,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({
      message: "Employee fetched successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update employee
exports.updateEmployee = async (req, res) => {
  try {
    const { name, gender, mobileNo, alternateMobileNo, active } = req.body;

    let employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    employee.name = name || employee.name;
    employee.gender = gender || employee.gender;
    employee.mobileNo = mobileNo || employee.mobileNo;
    employee.alternateMobileNo =
      alternateMobileNo || employee.alternateMobileNo;
    employee.active = active !== undefined ? active : employee.active;

    await employee.save();
    res.status(200).json({
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({
      message: "Employee deleted successfully",
      employee,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
