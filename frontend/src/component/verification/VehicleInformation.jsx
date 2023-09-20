import React, { useState } from 'react';

function VehicleInformation() {
    const [formData, setFormData] = useState({
        vehicleType: '',
        make: '',
        model: '',
        year: '',
        color: '',
        licensePlate: '',
        registrationNumber: '',
        carPicture: '',
        carDocument: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform actions like submitting the form data here
    };

    return (
        <form onSubmit={handleSubmit}>
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
                <div>
                    <label>Model:</label>
                    <input type="text" name="model" value={formData.model} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Year:</label>
                    <input type="text" name="year" value={formData.year} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Color:</label>
                    <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
                </div>
                <div>
                    <label>License Plate:</label>
                    <input type="text" name="licensePlate" value={formData.licensePlate} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Registration Number:</label>
                    <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Car Picture:</label>
                    <input type="file" name="carPicture" onChange={handleInputChange} />
                </div>
                <div>
                    <label>Car Document:</label>
                    <input type="file" name="carDocument" onChange={handleInputChange} />
                </div>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default VehicleInformation;
