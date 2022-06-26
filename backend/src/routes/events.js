import { Router } from 'express';
import { getEventsFromTuna, getEvent, saveEvent, deleteEvent, getEventUsers, saveUserEvent } from '../controllers/events';

const router = Router();

/**
 * @swagger
 * tags:
 *  name: Events
 *  description: Events endpoint
 */


/**
 * @swagger
 * /tunas/{tunaId}/events:
 *  get:
 *   description: Use to get all events from a tuna
 *   tags: [Events]
 */
router.get('/tunas/:tunaid/events', getEventsFromTuna);

/**
 * @swagger
 * /tunas/{tunaId}/events/{eventId}:
 *  get:
 *   description: Use to get one event from a tuna
 *   tags: [Events]
 */
router.get('/tunas/:tunaid/events/:eventid', getEvent);

/**
 * @swagger
 * /tunas/{tunaId}/events/{eventId}:
 *  post:
 *  description: Use to get all the users that are attending an event
 * tags: [Events]
 */
router.get('/events/:eventid/users', getEventUsers);

/**
 * @swagger
 * /tunas/{tunaId}/events:
 *  post:
 *   description: Use to save an event to a tuna
 *   tags: [Events]
 */
router.post('/tunas/:tunaid/events', saveEvent);

/**
 * @swagger
 * /events/{eventId}/users/{userId}:
 *  post:
 *   description: Use to save a user to an event
 *   tags: [Events]
 */
router.post('/events/:eventid/users/:userid', saveUserEvent);

/**
 * @swagger
 * /events/{eventId}:
 *  delete:
 *   description: Use to delete an event by id
 *   tags: [Events]
 */
router.delete('/events/:eventid', deleteEvent);

export default router;