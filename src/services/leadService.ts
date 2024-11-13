import { injectable, inject } from 'tsyringe';
import { LeadRepository } from '../repositories/leadRepository';

@injectable()
export class LeadService {
    private leadRepository: LeadRepository;

    constructor(@inject(LeadRepository) leadRepository: LeadRepository) {
        this.leadRepository = leadRepository;
    }

    public async addLead(name: string, email: string, mobile: string, postcode: string, servicetype: string): Promise<any[]> {
        return await this.leadRepository.addLead(name, email, mobile, postcode, servicetype);
    }

    public async getLead(id: string): Promise<any[]> {
        return await this.leadRepository.getLead(id);
    }

    public async getLeads(): Promise<any[]> {
        return await this.leadRepository.getLeads();
    }
}
