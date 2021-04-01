--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: result_type; Type: TYPE; Schema: public; Owner: mitchellhole
--

CREATE TYPE public.result_type AS ENUM (
    'W',
    'sW',
    'D',
    'sL',
    'L'
);


ALTER TYPE public.result_type OWNER TO mitchellhole;

--
-- Name: combatant_id_seq; Type: SEQUENCE; Schema: public; Owner: mitchellhole
--

CREATE SEQUENCE public.combatant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.combatant_id_seq OWNER TO mitchellhole;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: combatants; Type: TABLE; Schema: public; Owner: mitchellhole
--

CREATE TABLE public.combatants (
    name character varying(50) NOT NULL,
    alliance character varying(50) NOT NULL,
    wins integer,
    losses integer,
    draws integer,
    score double precision,
    id integer DEFAULT nextval('public.combatant_id_seq'::regclass) NOT NULL,
    semi_wins integer,
    semi_losses integer
);


ALTER TABLE public.combatants OWNER TO mitchellhole;

--
-- Name: fight_id_seq; Type: SEQUENCE; Schema: public; Owner: mitchellhole
--

CREATE SEQUENCE public.fight_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fight_id_seq OWNER TO mitchellhole;

--
-- Name: fights; Type: TABLE; Schema: public; Owner: mitchellhole
--

CREATE TABLE public.fights (
    winner integer NOT NULL,
    loser integer NOT NULL,
    is_draw boolean NOT NULL,
    rating integer NOT NULL,
    source character varying(100),
    id integer DEFAULT nextval('public.fight_id_seq'::regclass) NOT NULL,
    result public.result_type
);


ALTER TABLE public.fights OWNER TO mitchellhole;

--
-- Data for Name: combatants; Type: TABLE DATA; Schema: public; Owner: mitchellhole
--

COPY public.combatants (name, alliance, wins, losses, draws, score, id, semi_wins, semi_losses) FROM stdin;
Luke Skywalker	Jedi	1	1	0	0	32	0	0
Jango Fett	Bounty Hunter	0	1	1	0	13	0	0
Jocasta Nu	Jedi	0	1	0	0	30	0	0
Admiral Trench	Seperatists	0	0	0	0	23	0	0
Mace Windu	Jedi	3	0	0	0	7	1	0
Mother Talzin	Nightsisters	0	0	0	0	20	0	0
Bobba Fett	Bounty Hunter	0	0	0	0	15	0	0
Cad Bane	Bounty Hunter	0	0	0	0	14	0	0
Savage Opress	Sith	0	1	0	0	16	0	0
Kirak Infil'a	Jedi	1	1	0	0	9	0	0
Saesee Tiin	Jedi	0	1	0	0	19	0	0
Agen Kolar	Jedi	0	1	0	0	18	0	0
Kit Fisto	Jedi	0	1	0	0	17	1	0
Count Dooku	Sith	3	1	3	0	12	0	0
Durge	Bounty Hunter	0	1	0	0	22	0	0
General Greivous	Seperatists	1	1	0	0	6	0	1
Qui-Gon Jin	Jedi	0	1	0	0	33	0	0
Darth Maul	Sith	2	2	0	0	31	0	0
Obi Wan Kenobi	Jedi	4	2	2	0	1	0	0
AD-24	Mercenary	0	1	0	0	26	0	0
Darth Momin	Sith	0	1	0	0	10	0	0
Prosset Dibs	Empire	0	1	0	0	27	0	0
Anakin Skywalker	Sith	6	5	2	0	3	0	0
Nahdar Vebb	Jedi	0	1	0	0	28	0	0
Asajj Ventress	Separatist	0	0	0	0	35	1	0
Ahsoka Tano	Jedi	0	0	0	0	34	0	1
Darth Sidious	Sith	6	0	1	0	25	0	1
Yoda	Jedi	0	0	2	0	4	0	0
Darth Plagueis	Sith	0	1	0	0	11	0	0
Grand Inquisitor	Empire	1	1	0	0	8	0	0
Pre Vizsla	Death Watch	0	1	1	0	21	0	0
\.


--
-- Data for Name: fights; Type: TABLE DATA; Schema: public; Owner: mitchellhole
--

COPY public.fights (winner, loser, is_draw, rating, source, id, result) FROM stdin;
3	1	f	82	A New Hope	5	W
9	3	f	84	Vader: Dark Lord of the Sith - 003	4	W
3	9	f	89	Vader: Dark Lord of the Sith - 004	3	W
3	8	f	74	Vader: Dark Lord of the Sith - 006	2	W
1	3	f	96	Revenge of the Sith	1	W
1	22	f	77	Clone Wars (2003)	6	W
17	6	f	79	Clone Wars: S1E10	8	sW
4	25	t	97	Revenge of the Sith	9	D
7	26	f	72	Jedi of the Republic: Mace Windu - 005	10	W
7	27	f	75	Jedi of the Republic: Mace Windu - 003	11	W
1	13	t	80	Attack of the Clones	12	D
6	28	f	71	Clone Wars: S1E10	13	W
12	1	f	86	Attack of the Clones	14	W
12	3	f	78	Attack of the Clones	15	W
12	4	t	95	Attack of the Clones	16	D
3	12	t	85	Clone Wars Movie	17	D
8	30	f	62	Vader: Dark Lord of the Sith - 009	18	W
3	12	f	94	Revenge of the Sith	19	W
1	21	f	72	Clone Wars: S2E12	7	D
31	21	f	73	Clone Wars: S5E15	20	W
3	32	f	75	The Empire Strikes Back	21	W
32	3	f	90	Return of the Jedi	22	W
7	13	f	72	Attack of the Clones	23	W
7	25	f	98	Revenge of the Sith	24	sW
25	31	f	86	Clone Wars: S5E16	25	W
25	16	f	75	Clone Wars: S5E16	26	W
25	17	f	84	Revenge of the Sith	27	W
25	18	f	86	Revenge of the Sith	28	W
25	19	f	81	Revenge of the Sith	29	W
12	3	f	90	Clone Wars: S4E04	30	W
12	3	t	92	Clone Wars: S4E18	31	D
1	6	f	84	Revenge of the Sith	32	W
31	33	f	80	The Phantom Menace	33	W
1	31	f	88	The Phantom Menace	34	W
3	10	f	98	Vader: Dark Lord of the Sith - 024	35	W
35	34	f	70	Clone Wars: S1E09	36	sW
25	11	f	95	Darth Plagueis	37	W
\.


--
-- Name: combatant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mitchellhole
--

SELECT pg_catalog.setval('public.combatant_id_seq', 35, true);


--
-- Name: fight_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mitchellhole
--

SELECT pg_catalog.setval('public.fight_id_seq', 37, true);


--
-- Name: combatants combatant_pkey; Type: CONSTRAINT; Schema: public; Owner: mitchellhole
--

ALTER TABLE ONLY public.combatants
    ADD CONSTRAINT combatant_pkey PRIMARY KEY (id);


--
-- Name: fights fight_pkey; Type: CONSTRAINT; Schema: public; Owner: mitchellhole
--

ALTER TABLE ONLY public.fights
    ADD CONSTRAINT fight_pkey PRIMARY KEY (id);


--
-- Name: combatants unique_name; Type: CONSTRAINT; Schema: public; Owner: mitchellhole
--

ALTER TABLE ONLY public.combatants
    ADD CONSTRAINT unique_name UNIQUE (name);


--
-- Name: fights loser_fk; Type: FK CONSTRAINT; Schema: public; Owner: mitchellhole
--

ALTER TABLE ONLY public.fights
    ADD CONSTRAINT loser_fk FOREIGN KEY (loser) REFERENCES public.combatants(id);


--
-- Name: fights winner_fk; Type: FK CONSTRAINT; Schema: public; Owner: mitchellhole
--

ALTER TABLE ONLY public.fights
    ADD CONSTRAINT winner_fk FOREIGN KEY (winner) REFERENCES public.combatants(id);


--
-- PostgreSQL database dump complete
--

