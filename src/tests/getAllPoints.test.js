import { describe, it, expect} from "vitest";
import request from 'supertest';
import app from '../index.js'

describe('GET /api/v1/points', () => {

  const url = "/api/v1/points"
  it('should exists', async () => {
    const response = await request(app).get(url).send()
    expect(response.statusCode).toBe(200)
  })

  it('should return an object', async () => {
    const response = await request(app).get(url).send()
    expect(typeof response.body).toBe('object')
  })

  it('should return an object with specific property', async () => {
    const response = await request(app).get(url).send()
    expect(response.body).toHaveProperty('status')
    expect(response.body).toHaveProperty('data')
  })
})