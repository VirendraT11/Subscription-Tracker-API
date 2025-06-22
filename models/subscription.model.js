import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be greater than 0'],
    },
    currency: {
        type: String,
        enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'INR', 'BRL', 'MXN', 'TWD', 'THB', 'VND', 'TRY', 'ZAR', 'KRW', 'SGD'],
        default: 'USD'
    },
    frequency: {
        type: String,
        enum: ['Monthly', 'Yearly', 'Weekly', 'Daily'],
    },
    category: {
        type: String,
        enum: ['Entertainment', 'Business', 'Travel', 'Education', 'Health', 'Finance', 'Food', 'Personal'],
        required: [true, 'Category is required']
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        trim: true
    },
    status: {
        type: String,
        enum: ['Active', 'Cancelled', 'Expired'],
        default: 'Active'
    },
    startDate: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => value <= new Date(),
            message: 'Start date must be in the past'
        }
    },
    renewalDate: {
        type: Date,
        required: true,
        validate: {
            validator: function(value) {
                return value >= this.startDate;
            },
            message: 'Renewal date must be after start date'
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true
    }
}, { timestamps: true });

subscriptionSchema.pre('save', function(next) {
    if(!this.renewalDate) {
        const renewalPeriods = {
            daily: 1,
            weekly: 7,
            monthly: 30,
            yearly: 365
        };

        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);
    }
    if(this.renewalDate < new Date()) {
        this.status = 'Expired';
    }
    next();
})

const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;