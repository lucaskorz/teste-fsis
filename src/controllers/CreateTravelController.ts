import { CreateTravelRepository } from '../repository/CreateTravelRepository'
import { Request, Response } from 'express';

export async function CreateTravelController(
    request: Request, response: Response
  ): Promise<Response> {
    
  const { pilotName, copilotName, originName, destinationName, starshipName } = request.body;

  const travel = await CreateTravelRepository(
    pilotName,
    copilotName,
    originName,
    destinationName,
    starshipName
  )

  return response.status(201).json(travel)
}