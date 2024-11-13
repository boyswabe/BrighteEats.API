import 'reflect-metadata';
import { container } from 'tsyringe';
import express from 'express';
import { LeadService } from './services/leadService';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

// Register classes in the container
container.register('LeadRepository', { useClass: LeadService });
const leadService = container.resolve(LeadService);

// API endpoint to add a lead
app.post('/lead', async (req, res) => {
    try {
        const { Name, Email, Mobile, PostCode, ServiceType } = req.body;
        const leads = await leadService.addLead(Name as string, Email as string, Mobile as string, PostCode as string, ServiceType as string);
        res.json(leads);
    } catch (err) {
        console.error('Error adding a lead:', err);
        res.status(500).send('Server error');
    }
});

// API endpoint to get a lead
app.get('/lead', async (req, res) => {
    try {
        const { id } = req.query;
        const lead = await leadService.getLead(id as string);

        if (lead == undefined)
            res.status(404).send(lead);
        
        res.json(lead);
    } catch (err) {
        console.error('Error getting the lead:', err);
        res.status(500).send('Server error');
    }
});

// API endpoint to get all leads
app.get('/leads', async (req, res) => {
    try {
        const leads = await leadService.getLeads();
        res.json(leads);
    } catch (err) {
        console.error('Error getting leads:', err);
        res.status(500).send('Server error');
    }
});

app.listen(port, () => {
    console.log(`Server Listening on PORT ${port}`);
});

export default app;