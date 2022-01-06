import { Model, createServer, RestSerializer, Response } from 'miragejs';

export const server = ({ environment = 'development' } = {}) => {
  return createServer({
    environment,
    models: {
      joke: Model,
    },
    serializers: {
      application: RestSerializer,
    },
    seeds(server) {
      server.create('joke', {
        id: '1',
        type: 'programming',
        question: 'How many programmers does it take to change a lightbulb?',
        answer: "None that's a hardware problem",
      });

      server.create('joke', {
        id: '2',
        type: 'programming',
        question: 'A DHCP packet walks into a bar and asks for a beer.',
        answer: 'Bartender says, "here, but I’ll need that back in an hour!"',
      });

      server.create('joke', {
        id: '3',
        type: 'barista',
        question: 'Barista: How do you take your coffee?',
        answer: 'Me: Very, very seriously.',
      });

      server.create('joke', {
        id: '4',
        type: 'programming',
        question: 'Where do programmers like to hangout?',
        answer: 'The Foo Bar.',
      });

      server.create('joke', {
        id: '5',
        type: 'programming',
        question: "What's the best thing about a Boolean?",
        answer: "Even if you're wrong, you're only off by a bit.",
      });
    },

    routes() {
      this.namespace = '/api';

      this.get('/v1/readiness', () => {
        return new Response(
          503,
          {},
          {
            errors: {
              code: 'SERVICE_UNAVAILABLE',
              message: 'Sorry but we are too busy...',
            },
          },
          { timing: 1500 }
        );
      });

      this.get('/v2/readiness', () => ({ ready: true }), { timing: 1000 });

      this.get(
        '/v1/jokes',
        function (schema) {
          return this.serialize(schema.jokes.all()).jokes;
        },
        { timing: 1000 }
      );
    },
  });
};
