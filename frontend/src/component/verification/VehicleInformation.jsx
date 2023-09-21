import React, { useState } from 'react';
import VehicleCss from  './style/vehicleInformation.module.css'

function VehicleInformation() {
    const [formData, setFormData] = useState({
        vehicleType: '',
        make: '',
        // model: '',
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
    };

    return (
        <div className={ VehicleCss["vehicleMainContainer"]}>
        <form onSubmit={handleSubmit}>
            <div className= {VehicleCss["vehicle-main"]}>
                <h3 className={VehicleCss.vehiclInfo}>Vehicle Information</h3>
                <p>We're legally required to ask you for some documents to sign you up as a driver.
                    Documents scans and quality photos are accepted.
                </p>
                <div className={VehicleCss.vehicleTypeTxt}>
                    <label>Vehicle Type</label>
                    <input type="text" name="vehicleType" value={formData.vehicleType} onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.makeTypeTxt}>
                    <label>Vehicle Make</label>
                    <input type="text" name="make" value={formData.make} onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.modelType}>
                    <label>Vehicles Model</label>
                    <input type="text" name="model" value={formData.model} onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.yearType}>
                    <label>Vehicle Year:</label>
                    <input type="text" name="year" value={formData.year} onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.color}>
                    <label>Vehicles Color</label>
                    <input type="text" name="color" value={formData.color} onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.license}>
                    <label>License Plate:</label>
                    <input type="text" name="licensePlate" value={formData.licensePlate} onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.registNumb}>
                    <label>Registration Number</label>
                    <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.carpict}>
                    <label>Car Picture</label>
                    <input type="file" name="carPicture" onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.cardocum}>
                    <label>Car Document</label>
                    <input type="file" name="carDocument" onChange={handleInputChange} />
                </div>
                <div className={VehicleCss.submit}>
                    <button type="submit">Submit</button>
                </div>
            </div>

        </form>
        </div>
    );
}

export default VehicleInformation;
