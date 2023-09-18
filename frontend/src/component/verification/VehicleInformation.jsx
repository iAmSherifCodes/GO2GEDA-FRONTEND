import React, { useState } from 'react';

function VehicleInformation() {
    const [formData, setFormData] = useState({
        vehicleType: '',
        make: '',
        model: '',
        year: '',
        color: '',
        licensePlate: '',
        vin: '',
        registrationNumber: '',
        insuranceCompany: '',
        insurancePolicyNumber: '',
        insuranceExpirationDate: '',
        odometerReading: '',
        fuelType: '',
        vehicleCondition: '',
        additionalNotes: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form>
            {/* ... other form fields */}
            <div>
                <h3>Vehicle Information</h3>
                <div>
                    <label>Vehicle Type:</label>
                    <input type="text" name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Make:</label>
                    <input type="text" name="make" value={formData.make} onChange={handleInputChange} />
                </div>
                {/* Add more vehicle-related fields here */}
                <div>
                    <label>Additional Notes:</label>
                    <textarea
                        name="additionalNotes"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default VehicleInformation;
