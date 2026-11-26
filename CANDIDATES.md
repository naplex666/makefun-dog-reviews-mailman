# Candidates — The Dog Reviews the Mailman

Judged pairwise against the judge's brief, in the brief's own order:
1. a funny one-line review a dog gives the mailman sits at the centre, and anything off that subject loses to any funny dog review of the mailman;
2. the dog's side of the visit is the joke: a grievance, a bribe, a suspicion or a small triumph over the mailman comes through in the line;
3. the voice is a dog's, with a dog's priorities and vocabulary, not a person wearing a fur suit;
4. the line is one line, tight and complete, with a turn at the end that earns the laugh;
5. the laugh comes from this dog and this mailman, not from a pun that would fit any stranger at the door.

Field notes (41 submissions in at build time): "One star." openings are crowded, "Five stars for the mailman" is repeated, and the biscuit-bribe angle is already taken. Both candidates below avoid those patterns.

## Candidate A — suspicion (159 chars)
> He wears the same uniform every day and my human still opens the door for him, so either he's family or they're in on the break-in. One star. I'm watching him.

## Candidate B — grievance + triumph (157 chars)
> He brings paper every day and never once brings the ball, so I shredded his last delivery and left it on the porch as my review. One star, would shred again.

## Pairwise: A vs B
- (1) Tie — both are squarely a dog reviewing the mailman.
- (2) B edges it — it carries two of the four: a grievance (never brings the ball) AND a small triumph acted out (the shredded delivery). A carries one: suspicion.
- (3) Tie, slight edge B — A's uniform-suspicion is dog logic, but B's shredding paper and waiting for the ball are concrete dog priorities and dog behaviour.
- (4) B wins — A's turn ("in on the break-in") sits mid-line and the ending is a tag ("I'm watching him"); B's turn lands at the very end: the shredded delivery IS the review, then "would shred again" closes it.
- (5) Tie — both are specific to this dog, this mailman, this porch.

First difference is (2), so B wins — and B also wins (4), the turn.

## Winner (in main.ts)
> He brings paper every day and never once brings the ball, so I shredded his last delivery and left it on the porch as my review. One star, would shred again.

Why it wins: the grievance is a dog's (the ball, not the mail), the triumph is a dog's (shredding paper), and the punchline is the review itself — the thing he shredded is the thing he left as his review. One sentence, one breath, no explaining, and the turn earns the laugh at the end.

## Revision (thinking_revised gate)
> He brings paper every day and never once brings the ball, so I shredded today's delivery and left the pieces on his doormat as my review. One star, would shred again.

Why the edit: three small tightenings that make the same joke land harder. "Today's delivery" instead of "his last delivery" makes it immediate — the review was just filed. "The pieces" instead of "it" makes the shredding visible: what is left on the mat is visibly the shredded mail. "His doormat" instead of "the porch" aims the review at him — the punchline is now delivered to his door, not left somewhere neutral. That sharpens criterion (2) (the triumph is acted out more concretely) and criterion (4) (the turn lands harder, because the review is physically on his mat), while keeping the same meaning, the same turn, one sentence, one breath.

---

# Round 2 revision — after round 1 (26 Nov 2026, ~18:20 WIB)

Live-verified with `makefun rounds`: round 1 judged, 1,279 ranked.
Our entry: **807 of 1,279, score 469123** ("One Star, Would Shred Again", 166 chars).
Neighbours: 802 @kokoronotomo046 469594, 803 469496, 804 469472, 805 469360,
806 @hunteryyy 469216, 807 us 469123, 808 469007, 809 468804, 810 468780,
811 468654, 812 468493. Gap to #806 is 93 points; the whole 802–812 band
spans only 1,101 points — the field is dense here, ~100 points a place.

Structural fact from RULES.txt ("The final's contenders"): "each interim
round draws its own cut of 500 on the standings of the judged round before
it (the first round plays the whole field), and the final's cut is drawn on
the latest judged round's standings". At 807 we are below the 500 cut, so
the old entry is cut from round 2 and from the final unless replaced: a
fresh submission received before the round 2 cutoff (20:15 WIB) has no
round-1 standing and counts from round 2 (CLI: "an entry submitted now
counts from round 2"). Resubmitting is therefore the only way back in —
and it is only worth doing with a line that clearly beats the old one
pairwise. Climbing ~307 places also means the new line must beat the old
one by a real margin, not a hair: ~100 points a place in this band.

## Dissection: what #802 and #806 do that ours doesn't

#802 (86 chars): "He rings twice, I bark once, he runs — and somehow I'm the one
with anger issues?"
- (2) Grievance + triumph, both live in the visit: he runs (the dog chased
  him off) plus an injustice twist (the dog gets blamed). Ours has grievance
  + triumph too, but the triumph is after the fact (shredding paper), not
  the mailman himself fleeing.
- (3) "I bark once" is one concrete dog behaviour; "anger issues" is a
  human therapy phrase, but it is the joke's turn, not the narrator's voice.
- (4) The turn is a question at the very end that reframes the whole visit.
  Ours ends on a tagline ("would shred again", a review-meme formula).
- (5) "Rings twice" is a doorbell ritual specific to the mailman. Our ball
  grievance would fit any visitor who doesn't bring a ball.

#806: "Five stars: he visits daily, fears the gate, and delivers the good
smells. One star: he never once stayed to be properly sniffed."
- (2) Grievance (never stayed to be sniffed) + triumph (he fears the gate).
- (3) The strongest dog voice in the band: "the good smells", "properly
  sniffed" — smell is the dog's sense, and the whole line runs on it.
- (4) The five-star-to-one-star reversal IS the turn, built into the
  review format itself.
- (5) Daily visit, gate fear, smells — all mailman-specific.

What ours lacks, in the brief's order: a turn that reframes instead of a
tagline (4); a grievance that only a mailman can cause (5) — the ball
complaint fits any visitor; and dog-voice purity (3) — "left the pieces on
his doormat as my review" is a dog narrating like a human reviewer.
What ours has and must keep: a concrete, acted-out triumph (shredding the
mail itself, not just barking at it).

## Candidate C — same joke, tightened (131 chars)
> He brings paper every day and never a ball, so I shredded today's mail and left the pieces on his mat. One star — delivery refused.

## Candidate D2 — new angle: jealousy (110 chars)
> His bag smells of every dog on my street, so I shredded his mail and left it on his mat. One star — he cheats.

D1 (130 chars, rejected in favour of D2): "He visits every dog on my street
and smells like all of them, so I shredded his mail and left it on his mat.
One star — he cheats." D1 spells the frame out; D2 lets it click at the
turn ("he cheats"), which is the laugh, and D2 is tighter with a second dog
behaviour (sniffing the bag) instead of a redundant clause.

## Pairwise: C vs OLD
- (1) Tie. (2) Tie — same grievance + triumph. (3) C edges it: drops the
  "as my review" meta-narration. (4) C edges it: "delivery refused" is a
  postal turn, vs the "would shred again" tagline. (5) C edges it slightly:
  the turn is mail-specific. First difference is (3), margin 1. C beats OLD
  narrowly — NOT enough on its own to justify a resubmit.

## Pairwise: D2 vs C
- (1) Tie. (2) D2 wins: suspicion/jealousy (he visits — and smells of —
  every other dog) is a named joke engine and is mailman-specific; C's ball
  grievance fits any visitor. (3) D2 wins: smell/sniffing is the dog's
  sense; the ball is a dog priority but a generic one. (4) D2 wins: "he
  cheats" reframes the whole relationship at the last word; "delivery
  refused" is a postal pun that would fit any delivery driver. (5) D2 wins
  clearly: the joke only works for a mailman walking a route past every dog
  on the street. D2 beats C on (2), (3), (4) and (5) — decisive.

## Pairwise: D2 vs OLD
- (1) Tie — both squarely a dog reviewing the mailman.
- (2) D2 edges it: suspicion (cheating with the other dogs on the route) +
  triumph (shredded his mail) vs grievance (no ball) + triumph (shredded
  delivery). D2's grievance can only be caused by a mailman; OLD's ball
  grievance can be caused by any visitor.
- (3) D2 wins: sniffing the bag and jealousy over smells is dog through and
  through; OLD's "as my review" is a human reviewer narrating.
- (4) D2 wins: "he cheats" is a turn that reframes the visit as infidelity
  at the last word; OLD ends on the "would shred again" tagline.
- (5) D2 wins clearly: only a mailman carries a bag smelling of every dog
  on the street. The laugh comes from this dog and this mailman.
- First difference is (2), and D2 also wins (3), (4) and (5). That is a
  clear pairwise win, not a hair — D2 is the resubmit.

## Winner (round 2 resubmit, in main.ts)
> His bag smells of every dog on my street, so I shredded his mail and left it on his mat. One star — he cheats.

Why it wins: it keeps OLD's acted-out triumph (shredding the mail, left on
his mat) and replaces the two weak spots the neighbours exposed — the
visitor-generic ball grievance becomes a mailman-only jealousy, and the
tagline ending becomes a reframe ("he cheats") that only lands because the
bag smells of the whole street. 110 chars, one sentence, one breath.
Nothing copied from #802 or #806: no doorbell, no bark-once, no star
reversal, no "properly sniffed" — the smell angle is used differently
(jealousy over other dogs, not praise of good smells).
