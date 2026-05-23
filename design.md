# DESIGN.md — Devin-Inspired AI Engineering Workspace

> Goal: Create a polished AI software-engineering workspace inspired by the product direction of Devin.ai: task delegation, autonomous coding sessions, developer tools, testing, review, and shipping. Do not copy Devin branding, logo, exact copy, screenshots, layout, or visual identity.

---

## 1. Product Concept

Build a focused AI engineering interface where users can ask an AI agent to plan, code, test, review, and ship software tasks.

The product should feel like a calm developer command center, not a generic chatbot.

Core experience:

- User writes an engineering task.
- Agent creates a plan.
- Agent works through steps.
- User watches progress through timeline, code, shell, and preview panels.
- Final output includes files changed, tests run, risks, and next steps.

---

## 2. Design Personality

Keywords:

- AI software engineer
- Dark professional workspace
- Calm command center
- Developer-first
- Precise
- Minimal
- Trustworthy
- Technical
- Agentic workflow
- Enterprise-ready

Design should feel advanced but not noisy. Avoid cyberpunk excess, flashy neon, or playful chatbot styling.

---

## 3. Main Screens

### Landing Page

Purpose: explain the product and invite the user to start a task.

Sections:

1. Navbar
2. Hero with strong headline
3. Large task prompt box
4. Use-case cards
5. Workspace preview
6. Workflow section
7. Integrations section
8. Trust / verification section
9. Final CTA

Hero copy style:

```txt
Delegate engineering work to an AI agent that plans, codes, tests, and ships.
```

CTA examples:

```txt
Start a Task
View Workflow
Open Workspace
```

---

### Agent Workspace

Main app layout:

```txt
┌──────────────────────────────────────────────────────┐
│ Topbar: Project / Repo / Status / Share / Settings   │
├──────────────┬───────────────────────┬───────────────┤
│ Sidebar      │ Main Conversation     │ Tool Panel    │
│              │                       │               │
│ New Task     │ User request          │ IDE           │
│ Sessions     │ Agent plan            │ Shell         │
│ PRs          │ Progress timeline     │ Browser       │
│ Docs         │ Completion summary    │ Tests         │
└──────────────┴───────────────────────┴───────────────┘
```

Required elements:

- Current task title
- Repository indicator
- Status badge
- Agent plan card
- Step-by-step progress timeline
- Tool activity feed
- Code panel
- Terminal panel
- Browser/preview panel
- Test result summary
- Final PR or delivery summary

---

### Task Intake Screen

Fields:

- Task title
- Repository/project
- Main instruction
- Success criteria
- Files or areas to inspect
- Constraints
- Testing requirements
- Preferred output: PR, patch, documentation, prototype, or explanation

Task templates:

- Fix a bug
- Build a feature
- Refactor code
- Write tests
- Review a PR
- Create documentation
- Investigate an issue
- Perform visual QA

Prompt placeholder:

```txt
Ask the agent to fix a bug, build a feature, write tests, or review a PR...
```

---

### PR Review Screen

Purpose: help users review agent work quickly.

Structure:

```txt
PR Summary
- What changed
- Why it changed
- Files touched
- Tests run
- Risk level
- Follow-up notes

[View Diff] [Run Tests] [Request Changes] [Approve]
```

Include:

- Diff summary
- Files changed
- CI/test status
- Visual QA notes
- Risk warnings
- Rollback notes

---

### Documentation / Knowledge Screen

Purpose: store project rules and reusable instructions.

Sections:

- Project overview
- Repo conventions
- Coding style
- Design rules
- Testing commands
- Deployment process
- Known issues
- Agent instructions
- Do-not-touch areas

Knowledge card example:

```txt
When working on the frontend:
- Use existing components first.
- Follow design.md.
- Run tests before final summary.
```

---

## 4. Visual Design System

Dark-first, technical, clean, and professional.

### CSS Tokens

```css
:root {
  --color-bg: #07090f;
  --color-bg-soft: #0b0f18;
  --color-surface: #101521;
  --color-surface-soft: #151b2a;
  --color-surface-raised: #1a2233;

  --color-border: #263246;
  --color-border-soft: rgba(255, 255, 255, 0.08);

  --color-text: #f5f7fb;
  --color-text-muted: #aab4c5;
  --color-text-soft: #6f7b8f;

  --color-primary: #7c9cff;
  --color-primary-soft: #9db4ff;
  --color-primary-glow: rgba(124, 156, 255, 0.28);

  --color-success: #39d98a;
  --color-warning: #ffd166;
  --color-danger: #ff6b6b;
  --color-purple: #b794f4;

  --color-code-bg: #05070d;
  --color-terminal-bg: #03050a;

  --radius-sm: 10px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --shadow-sm: 0 8px 24px rgba(0, 0, 0, 0.22);
  --shadow-md: 0 20px 70px rgba(0, 0, 0, 0.34);
  --shadow-glow: 0 0 32px rgba(124, 156, 255, 0.22);
}
```

### Color Rules

- Background should be deep dark navy/black.
- Main panels use slightly lighter dark surfaces.
- Use soft blue as the main action color.
- Use green only for completed or passed states.
- Use yellow for testing, review, or warning states.
- Use red only for failed, blocked, or destructive states.
- Avoid excessive neon and rainbow gradients.

---

## 5. Typography

Use modern sans-serif fonts for UI:

```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Use monospace for code, logs, commands, hashes, and metadata:

```css
font-family: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;
```

Type scale:

| Role | Size | Weight |
|---|---:|---:|
| Hero | 56px | 700 |
| H1 | 40px | 700 |
| H2 | 30px | 650 |
| H3 | 22px | 600 |
| Body | 16px | 400 |
| Small | 14px | 400 |
| Caption | 12px | 500 |
| Code | 13px | 500 |

Rules:

- Use short, direct headings.
- Avoid vague marketing copy.
- Make labels clear and technical.
- Use monospace only where it adds meaning.

---

## 6. Components

### Primary Button

```css
.btn-primary {
  background: linear-gradient(180deg, #9db4ff 0%, #7c9cff 100%);
  color: #05070d;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 999px;
  padding: 12px 18px;
  font-weight: 650;
  box-shadow: 0 0 28px rgba(124, 156, 255, 0.24);
}
```

Button labels:

```txt
Start Task
Run Tests
Create PR
Approve Changes
Open Workspace
```

### Secondary Button

```css
.btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  color: #f5f7fb;
  border: 1px solid #263246;
  border-radius: 999px;
  padding: 12px 18px;
}
```

### Panels / Cards

```css
.panel {
  background: linear-gradient(180deg, #101521 0%, #0d121d 100%);
  border: 1px solid #263246;
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.34);
}
```

Use panels for:

- Agent plan
- Progress timeline
- Code review
- Terminal output
- Test results
- Knowledge cards
- Automation cards

---

## 7. Status Badges

Badge states:

```txt
Planning
Running
Editing
Testing
Needs Review
Blocked
Completed
PR Ready
```

Rules:

- Planning: blue
- Running: purple
- Editing: muted blue-gray
- Testing: yellow
- Completed: green
- Blocked: red
- Needs Review: yellow

---

## 8. Prompt Box

The prompt box is the primary interaction area.

```css
.prompt-box {
  background: #101521;
  border: 1px solid #263246;
  border-radius: 28px;
  padding: 18px;
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
}
```

Requirements:

- Large textarea
- Repo/context selector
- Attachment/context button
- Task template chips
- Submit CTA
- Optional success criteria field

---

## 9. Tool Panels

### IDE Panel

Looks like a compact code editor.

Include:

- File tabs
- File path header
- Line numbers
- Changed-line indicators
- Syntax-colored code if available

### Shell Panel

Looks like a real terminal.

Include:

- Command history
- Running state
- Success/failure output
- Scrollable log area

### Browser Preview Panel

Use for visual QA.

Include:

- URL bar
- Viewport controls
- Preview area
- Mobile/desktop toggle
- QA notes

---

## 10. Layout Rules

Desktop app shell:

```txt
Sidebar | Main Work Area | Tool Panel
```

Recommended widths:

```css
--sidebar-width: 260px;
--tool-panel-width: 420px;
--content-max-width: 1120px;
```

Spacing scale:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 24px;
--space-6: 32px;
--space-7: 48px;
--space-8: 64px;
--space-9: 96px;
```

Responsive behavior:

- Mobile: stack panels vertically.
- Mobile: collapse sidebar into drawer or bottom nav.
- Mobile: show tool panels as tabs.
- Tablet: use two-column layout when possible.
- Desktop: use full three-column workspace.
- Minimum touch target: 44px.

---

## 11. Motion

Motion should communicate progress, not distract.

Use:

- Soft hover lift
- Subtle focused glow
- Progress loading states
- Smooth tab/panel transition

Avoid:

- Bouncy animations
- Excessive particles
- Constant pulsing
- Flashy terminal effects

Recommended:

```css
transition: all 180ms ease;
```

---

## 12. Copywriting Rules

Voice:

- Direct
- Technical
- Calm
- Helpful
- Confident

Use copy like:

```txt
Plan created
Running tests
Review required
PR ready
Add context
Open workspace
Verify output
```

Avoid copy like:

```txt
Magic AI will do everything
Replace your developers
One-click perfect software
Insane productivity boost
```

Completion summary format:

```txt
Completed:
- What changed
- Files touched
- Tests run
- Known limitations
- Recommended next step
```

---

## 13. Mock Engineering Data

Example task:

```txt
Fix the PDF upload flow so large files show a clear error instead of silently failing.
```

Example plan:

```txt
1. Inspect upload handler and validation.
2. Add visible error state.
3. Add tests for oversized PDFs.
4. Run lint and tests.
5. Prepare review summary.
```

Example test output:

```txt
✓ upload validation
✓ oversized file error state
✓ drag-and-drop behavior
✓ responsive layout
```

---

## 14. MVP Feature List

Build first:

- Landing page
- Task prompt box
- Agent workspace mockup
- Progress timeline
- IDE/code panel mockup
- Shell output panel mockup
- Browser/test preview
- PR review summary
- Knowledge cards
- Responsive layout

Do not build real autonomous coding in the MVP. Start with a polished prototype using mock data.

---

## 15. Suggested File Structure

```txt
project/
├── index.html
├── workspace.html
├── review.html
├── docs.html
├── css/
│   └── style.css
├── js/
│   └── app.js
└── README.md
```

React version:

```txt
src/
├── components/
│   ├── AgentTimeline.jsx
│   ├── Button.jsx
│   ├── CodePanel.jsx
│   ├── PromptBox.jsx
│   ├── PRSummary.jsx
│   ├── ShellPanel.jsx
│   ├── StatusBadge.jsx
│   └── WorkspaceShell.jsx
├── pages/
│   ├── Landing.jsx
│   ├── Workspace.jsx
│   ├── Review.jsx
│   └── Documentation.jsx
├── data/
│   └── mockEngineeringData.js
└── App.jsx
```

---

## 16. Do and Do Not

Do:

- Make the UI feel like an engineering command center.
- Show task status clearly.
- Treat code, shell, browser, and tests as first-class panels.
- Show what changed and what needs review.
- Use realistic engineering language.
- Make completion criteria visible.

Do not:

- Copy Devin branding, logo, exact layout, exact copy, or screenshots.
- Make the UI look like a generic chatbot.
- Hide test results or risk notes.
- Use excessive neon or cyberpunk styling.
- Claim real autonomous coding exists unless implemented.

---

## 17. Agent Build Prompt

```txt
Read design.md first.

Build the UI according to this Devin-inspired AI engineering workspace design system.

Requirements:
- Dark professional developer UI
- Agent task intake prompt box
- Workspace with conversation, plan, timeline, IDE panel, shell panel, and browser/test preview
- PR review summary section
- Knowledge/documentation cards
- Responsive layout for mobile, tablet, and desktop
- Realistic mock engineering data
- Do not copy Devin branding, logo, exact copy, screenshots, or layout
- Keep the design calm, clean, technical, and trustworthy

After implementation, run the project locally, check layout issues, and fix errors.
```

---

## 18. Final Design Principle

The interface is successful if users can answer these questions within 10 seconds:

1. What task is the agent working on?
2. What is the current status?
3. What has changed?
4. What tools did the agent use?
5. Were tests or checks run?
6. What should I review next?

If these answers are obvious, the design is working.
