import { expect } from "chai";
import Sinon from "sinon";
import TournamentModel from "../../models/TournamentModel";
import { tournamentMock, updatedTournament } from "../mocks/TournamentMocks";

describe('TournamentModel', () => {
  describe('tests getAll', () => {
    let tournamentModel = new TournamentModel();

    before(() => {
      Sinon.stub(tournamentModel.model, 'find').resolves(tournamentMock);
    });

    after(() => Sinon.restore());

    it('should return all tournaments', async () => {
      const tournament = await tournamentModel.getAll();

      expect(tournament).to.be.eq(tournamentMock);
    });
  });

  describe('tests getByYear', () => {
    let tournamentModel = new TournamentModel();

    before(() => {
      Sinon.stub(tournamentModel.model, 'findOne').resolves(tournamentMock[0]);
    });

    after(() => Sinon.restore());

    it('should return the 2022 tournament', async () => {
      const tournament = await tournamentModel.getByYear(tournamentMock[0].year);

      expect(tournament).to.be.eq(tournamentMock[0]);
    });
  });

  describe('tests create', () => {
    let tournamentModel = new TournamentModel();

    before(() => {
      Sinon.stub(tournamentModel.model, 'create').resolves(tournamentMock[0]);
    });

    after(() => Sinon.restore());

    it('should return the tournament created', async () => {
      const tournament = await tournamentModel.create(tournamentMock[0]);

      expect(tournament).to.be.eq(tournamentMock[0]);
    });
  });

  describe('tests update', () => {
    let tournamentModel = new TournamentModel();

    before(() => {
      Sinon.stub(tournamentModel.model, 'findOneAndUpdate').resolves(updatedTournament);
    });

    after(() => Sinon.restore());

    it('should return the tournament updated', async () => {
      const tournament = await tournamentModel.update(tournamentMock[0].year, { ...tournamentMock[0], editionGoals: 153 });

      expect(tournament).to.be.eq(updatedTournament);
    });
  });

  describe('tests delete', () => {
    let tournamentModel = new TournamentModel();

    before(() => {
      Sinon.stub(tournamentModel.model, 'findOneAndDelete').resolves(tournamentMock[0]);
    });

    after(() => Sinon.restore());

    it('should return the tournament deleted', async () => {
      const tournament = await tournamentModel.delete(tournamentMock[0].year);

      expect(tournament).to.be.eq(tournamentMock[0]);
    });
  });

  describe('tests getByRunnerUp', () => {
    let tournamentModel = new TournamentModel();

    before(() => {
      Sinon.stub(tournamentModel.model, 'findOne').resolves(tournamentMock[0]);
    });

    after(() => Sinon.restore());

    it('should return the tournament\'s runnerUp', async () => {
      const tournament = await tournamentModel.getByRunnerUp(tournamentMock[0].runnerUp);

      expect(tournament).to.be.eq(tournamentMock[0]);
    });
  });
});