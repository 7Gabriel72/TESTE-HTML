# Design System Strategy: The Financial Architect

## 1. Overview & Creative North Star
**The Creative North Star: "The Editorial Ledger"**

Financial systems often feel like cold calculators or cluttered spreadsheets. This design system rejects that. Our goal is to transform financial management into a premium, editorial experience—what we call "The Editorial Ledger." 

By combining the authoritative weight of a high-end financial journal with the tactile softness of modern digital interfaces, we create an environment of **Quiet Authority**. We move away from "app-like" boxes and toward a fluid, layered canvas. We use intentional asymmetry, expansive white space, and a sophisticated interplay of greens to guide the user’s eye, making complex Portuguese financial data feel not just manageable, but elegant.

---

## 2. Colors & Surface Philosophy
Our palette is rooted in the "Deep Emerald" of stability. However, the sophistication lies in how these colors are layered, not just applied.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section off content. Boundaries must be defined through:
*   **Background Shifts:** Use `surface-container-low` sections against a `surface` background.
*   **Tonal Transitions:** Define areas by the natural break between a `surface-variant` and a `surface-container`.
*   **Negative Space:** Let the "Inter" typography and alignment do the work of grouping.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of heavy-stock paper.
*   **Base:** `surface` (#F8F9FA) is your canvas.
*   **Nesting:** Place a `surface-container-lowest` card (Pure White) inside a `surface-container-low` section to create a soft "lift." 
*   **Depth:** Use `primary-container` (#1B4332) for high-impact focus areas, but soften its weight by nesting `on-primary-container` text within it.

### The "Glass & Gradient" Rule
To avoid a flat, "Bootstrap" appearance:
*   **Signature Textures:** Use subtle linear gradients for primary actions (e.g., transitioning from `primary` #012D1D to `primary-container` #1B4332 at a 135° angle).
*   **Glassmorphism:** For floating modals or navigation bars, use `surface` at 80% opacity with a `20px` backdrop-blur. This ensures the "Deep Emerald" accents bleed through the interface, maintaining brand presence even in white-space-heavy layouts.

---

## 3. Typography: The Voice of Clarity
We utilize a dual-font strategy to balance editorial sophistication with functional precision.

*   **Display & Headlines (Manrope):** Chosen for its geometric stability. Use `display-lg` and `headline-md` for high-level balances and section headers. High-contrast sizing (e.g., a massive `display-md` balance next to a tiny `label-sm` date) creates a premium, intentional look.
*   **Body & UI (Inter):** Chosen for its unparalleled readability in dense financial data. 
*   **Tonal Hierarchy:** `title-lg` should be reserved for actionable summary cards. `label-md` is our workhorse for Portuguese data descriptors (e.g., "Patrimônio Total"), always set in `on-surface-variant` for a refined, secondary feel.

---

## 4. Elevation & Depth
In this system, depth is a function of light and shadow, not lines.

*   **The Layering Principle:** Physicality is key. A "Dashboard Card" does not need a border; it needs a `surface-container-lowest` fill against a `surface-dim` background. 
*   **Ambient Shadows:** When an element must float (like a Floating Action Button or a Modal), use an ultra-diffused shadow:
    *   *Y: 8px, Blur: 24px, Spread: -2px.*
    *   *Color:* Use a 6% opacity version of `on-surface` (#191C1D) tinted with 2% `primary`. This mimics natural light passing through a financial office.
*   **The "Ghost Border":** If accessibility requires a stroke (e.g., in high-contrast mode), use `outline-variant` at **15% opacity**. It should be felt, not seen.

---

## 5. Components & Primitive Styling

### Buttons: The Tactile Impulse
*   **Primary:** A gradient of `primary` to `primary-container` with `lg` (16px) rounded corners. The text is always `on-primary`.
*   **Tertiary:** No background, no border. Use `primary` text weight 600 with a subtle `primary-fixed-dim` underline that only appears on hover.

### Cards: The Floating Ledger
*   **Rule:** Forbid divider lines. 
*   **Alternative:** Separate "Input" from "Output" within a card using a subtle background shift to `surface-container-high` for the bottom "action" row of the card. Use `xl` (24px) corners for parent containers and `md` (12px) for nested elements.

### Financial Input Fields
*   **Style:** Minimalist. No bottom line. A `surface-container-highest` background with `md` corners. 
*   **State:** On focus, the background transitions to `surface-container-lowest` and a "Ghost Border" of `primary` at 20% opacity appears.

### Context-Specific Components
*   **The "Momentum" Chip:** Use `secondary` (#2D6A4F) for positive growth and `error` (#E63946) for debt alerts. These should have a 10% opacity background of their own color to keep the UI "soft."
*   **Pulse Indicators:** For "Think Twice" moments, use a soft-glow `tertiary_fixed_dim` (#FFBA27) circle next to the transaction amount to trigger a psychological pause.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Align the main balance to the left, but place secondary "Growth" stats in a floating card that overlaps the header container slightly.
*   **Use Portuguese Semantics:** Ensure labels like "Investimentos" or "Despesas Fixas" have enough tracking (0.5px) for readability.
*   **Layer Surfaces:** Use `surface-container-low` for the page background and `surface-container-lowest` for the primary content area.

### Don’t:
*   **Don’t use 100% black:** Always use `on-surface` (#191C1D) for text to maintain the "Deep Emerald" tonal harmony.
*   **Don’t use Dividers:** Never use a horizontal rule `<hr>` to separate list items. Use 16px or 24px of vertical padding instead.
*   **Don’t use Hard Shadows:** Avoid any shadow with an opacity higher than 10%. If it looks "heavy," it’s wrong.