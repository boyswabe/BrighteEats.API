import "reflect-metadata"
import { LeadService } from '../src/services/leadService';
import { LeadRepository } from '../src/repositories/leadRepository';

// Create mock implementations for LeadRepository 
const mockGetLeads = jest.fn();
const mockAddLead = jest.fn();
const mockGetLead = jest.fn();

// Mock LeadRepository 
const mockLeadRepository = {
  dbConfig: "",
  getLeads: mockGetLeads,
  addLead: mockAddLead,
  getLead: mockGetLead,
}

// Use Jest's built-in utility for making class mocks 
jest.mock('../src/repositories/leadRepository', () => ({
  LeadRepository: jest.fn().mockImplementation(() => mockLeadRepository),
}));

describe('LeadService', () => { 
  let leadService: LeadService; 

  beforeEach(() => { 
    leadService = new LeadService(mockLeadRepository as unknown as LeadRepository); 
  }); 
  
  describe('getLeads', () => { 
    it('should return leads', async () => { 
      const leads = [
          {
              "Id": "E464B9AF-EFB0-4C49-80AE-2F9EB97FDC4C",
              "Name": "Mike Chua 02",
              "Email": "mchua02@gmail.com",
              "Mobile": "(123) 456 7890",
              "PostCode": "55236",
              "ServiceType": "Delivery"
          },
          {
              "Id": "D16CE55B-7046-4503-AF0A-AF1731E4EA69",
              "Name": "Mike Chua 03",
              "Email": "mchua03@gmail.com",
              "Mobile": "(123) 456 7890",
              "PostCode": "55236",
              "ServiceType": "Pick-Up"
          },
          {
              "Id": "060F7E55-3913-4F9C-967F-BDA29C38538F",
              "Name": "Mike Chua 04",
              "Email": "mchua04@gmail.com",
              "Mobile": "(123) 456 7890",
              "PostCode": "55236",
              "ServiceType": "Pick-Up"
          },
          {
              "Id": "7C1333D2-0415-4BE8-B5FE-FB776ED00148",
              "Name": "Mike Chua 01",
              "Email": "mchua01@gmail.com",
              "Mobile": "(123) 456 7890",
              "PostCode": "55236",
              "ServiceType": "Delivery"
          }
      ];
      
      mockLeadRepository.getLeads.mockResolvedValue(leads); 

      const result = await leadService.getLeads(); 
      
      expect(result).toEqual(leads); 
      expect(mockLeadRepository.getLeads).toHaveBeenCalled(); 
    });
    
  });
    
  describe('getLead', () => { 
    it('should return the lead', async () => { 
      const lead = {
          "Id": "E464B9AF-EFB0-4C49-80AE-2F9EB97FDC4C",
          "Name": "Mike Chua 02",
          "Email": "mchua02@gmail.com",
          "Mobile": "(123) 456 7890",
          "PostCode": "55236",
          "ServiceType": "Delivery"
      };
      
      mockLeadRepository.getLead.mockResolvedValue(lead); 

      const result = await leadService.getLead("E464B9AF-EFB0-4C49-80AE-2F9EB97FDC4C"); 
      
      expect(result).toEqual(lead); 
      expect(mockLeadRepository.getLead).toHaveBeenCalled(); 
    });
    
    it('lead not found', async () => {
      const lead = undefined;
      
      mockLeadRepository.getLead.mockResolvedValue(lead); 

      const result = await leadService.getLead("E464B9AF-EFB0-4C49-80AE-2F9EB97FDC4C"); 
      
      expect(result).toEqual(lead); 
      expect(mockLeadRepository.getLead).toHaveBeenCalled(); 
    });
    
  });
  
    
  describe('addLead', () => { 
    it('should create a lead', async () => { 
      const lead = {
          "Id": "762020AF-5805-442B-8A15-7C131A7F7A02"
      };
      
      mockLeadRepository.getLead.mockResolvedValue(lead); 

      const result = await leadService.getLead("762020AF-5805-442B-8A15-7C131A7F7A02"); 
      
      expect(result).toEqual(lead); 
      expect(mockLeadRepository.getLead).toHaveBeenCalled(); 
    });
    
  });

});