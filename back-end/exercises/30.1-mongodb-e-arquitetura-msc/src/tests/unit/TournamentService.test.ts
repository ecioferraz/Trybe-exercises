import { expect } from "chai";
import Sinon from "sinon";
import { StatusCode } from "../../enums/StatusCode";
import TournamentService from '../../services/TournamentService';
import { tournamentMock, updatedTournament } from "../mocks/TournamentMocks";

describe('TournamentService', () => {
  describe('tests getAll', () => {
    let tournamentService = new TournamentService();

    before(() => {
      Sinon.stub(tournamentService.model, 'getAll').resolves(tournamentMock);
    });

    after(() => Sinon.restore());

    it('should return all tournaments', async () => {
      const tournament = await tournamentService.getAll();

      expect(tournament).to.be.eq(tournamentMock);
    });
  });

  describe('tests getByYear', () => {
    let tournamentService = new TournamentService();
    afterEach(() => Sinon.restore());

    describe('tests when there was a tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'getByYear').resolves(tournamentMock[0]);
      });
  
  
      it('should return the 2022 tournament', async () => {
        const tournament = await tournamentService.getByYear(tournamentMock[0].year);
  
        expect(tournament).to.be.eq(tournamentMock[0]);
      });
    });

    describe('tests when there was no tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'getByYear').resolves(null);
      });
  
      it('should return not found error', async () => {
        const tournament = await tournamentService.getByYear(2026);
  
        expect(tournament).to.be.deep.eq({ code: StatusCode.NOT_FOUND, message: 'There was no cup that year' });
      });
    });
  });

  describe('tests create', () => {
    let tournamentService = new TournamentService();

    before(() => {
      Sinon.stub(tournamentService.model, 'create').resolves(tournamentMock[0]);
    });

    after(() => Sinon.restore());

    it('should return the tournament created', async () => {
      const tournament = await tournamentService.create(tournamentMock[0]);

      expect(tournament).to.be.eq(tournamentMock[0]);
    });
  });

  describe('tests update', () => {
    let tournamentService = new TournamentService();
    
    afterEach(() => Sinon.restore());

    describe('tests when there was a tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'update').resolves(updatedTournament);
      });

      it('should return the tournament updated', async () => {
        const tournament = await tournamentService.update(tournamentMock[0].year, { ...tournamentMock[0], editionGoals: 153 });
  
        expect(tournament).to.be.eq(updatedTournament);
      });
    });

    describe('tests when there was no tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'update').resolves(null);
      });
  
      it('should return not found error', async () => {
        const tournament = await tournamentService.update(tournamentMock[0].year, { ...tournamentMock[0], editionGoals: 153 });
  
        expect(tournament).to.be.deep.eq({ code: StatusCode.NOT_FOUND, message: 'There was no cup that year' });
      });
    });
  });

  describe('tests delete', () => {
    let tournamentService = new TournamentService();

    afterEach(() => Sinon.restore());
    
    describe('tests when there was a tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'delete').resolves(tournamentMock[0]);
      });
  
  
      it('should return the tournament deleted', async () => {
        const tournament = await tournamentService.delete(tournamentMock[0].year);
  
        expect(tournament).to.be.eq(tournamentMock[0]);
      });
    });

    describe('tests when there was no tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'delete').resolves(null);
      });
  
      it('should return not found error', async () => {
        const tournament = await tournamentService.delete(tournamentMock[0].year);
  
        expect(tournament).to.be.deep.eq({ code: StatusCode.NOT_FOUND, message: 'There was no cup that year' });
      });
    });
  });

  describe('tests getByRunnerUp', () => {
    let tournamentService = new TournamentService();

    afterEach(() => Sinon.restore());
    
    describe('tests when there was a tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'getByRunnerUp').resolves(tournamentMock[0]);
      });

      it('should return the tournament\'s runnerUp', async () => {
        const tournament = await tournamentService.getByRunnerUp(tournamentMock[0].runnerUp);

        expect(tournament).to.be.eq(tournamentMock[0]);
      });
    });

    describe('tests when there was no tournament that year', () => {
      before(() => {
        Sinon.stub(tournamentService.model, 'getByRunnerUp').resolves(null);
      });
  
      it('should return not found error', async () => {
        const tournament = await tournamentService.getByRunnerUp(tournamentMock[0].runnerUp);
  
        expect(tournament).to.be.deep.eq({ code: StatusCode.NOT_FOUND, message: `${tournamentMock[0].runnerUp} was never a runner up.` });
      });
    });
  });
});