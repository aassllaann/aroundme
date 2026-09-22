---
title: In-Vehicle Multimodal Human-Machine Interaction System
order: 5
year: '2025'
type: UX DESIGN / MULTIMODAL AI
categories: ['AI·Systems', 'Archive·Web']
featured: false
summary: A team-built in-vehicle prototype combining voice and gesture input with a driver interface for navigation, calls, media, and role-based access.
preview:
  type: image
  src: images/works/in-vehicle-multimodal-interaction/thumbnail-illustration.png
  alt: Paper-cut car interior with a raised gesture hand, sound ribbons, and a road ahead
---

## An interface for the driving context

This 2025 team project explored a multimodal in-vehicle interaction system. The prototype brings voice, gesture, and visual recognition together with an on-screen interface for common driving tasks. Reducing manual interaction and driver distraction were design goals; the presentation does not report a measured safety outcome.

<div class="project-screen-gallery project-screen-gallery--single">
  <figure>
    <img src="/images/works/in-vehicle-multimodal-interaction/driver-dashboard.png" alt="Prototype driver dashboard shown in a browser, with vehicle status, music, weather, assistant messages, and a camera feed" loading="lazy" />
    <figcaption>01 / DRIVER DASHBOARD — ASSISTANT AND VEHICLE STATUS</figcaption>
  </figure>
</div>

## My role

- Deployed the voice recognition model for the prototype.
- Co-designed the in-vehicle interface and interaction logic.

The presentation credits other team members with gesture and visual model deployment, multimodal data fusion, frontend APIs, communication, planning, and testing. The screens below document the team's prototype, not individually authored features.

## Interaction and system

The driver view combines vehicle information, weather, media controls, an assistant conversation, and a visual input feed. The system architecture separates the frontend interface, backend services, and multimodal recognition. The presentation identifies SenseVoiceSmall for speech recognition, MediaPipe GestureRecognizer for static gestures, Porcupine for wake-word detection, and a Volcengine text-to-speech service. Its dynamic gestures use rules built on static gesture recognition.

<div class="project-feature">
  <div>
    <h3>Handle calls within the driver interface</h3>
    <p>The phone flow shows call history and contacts beside a dial pad. During a call, the interface exposes mute, speaker, keypad, hold, and hang-up controls.</p>
  </div>
  <figure>
    <img src="/images/works/in-vehicle-multimodal-interaction/phone-controls.png" alt="In-vehicle phone screen with call history, contacts, and in-call controls" loading="lazy" />
    <figcaption>02 / PHONE — CONTACTS AND IN-CALL CONTROLS</figcaption>
  </figure>
</div>

<div class="project-feature">
  <div>
    <h3>Keep navigation visible</h3>
    <p>The navigation view pairs a map and next-turn instruction with quick destinations. The presentation also describes destination search, route planning, and live navigation.</p>
  </div>
  <figure>
    <img src="/images/works/in-vehicle-multimodal-interaction/navigation.png" alt="In-vehicle navigation screen with a route map, next-turn instruction, and quick destinations" loading="lazy" />
    <figcaption>03 / NAVIGATION — ROUTE AND QUICK DESTINATIONS</figcaption>
  </figure>
</div>

<div class="project-feature">
  <div>
    <h3>Control media from the same shell</h3>
    <p>The media view includes playback, track progress, volume, and lyrics. Navigation between functions stays in the left-side rail used across the driver screens.</p>
  </div>
  <figure>
    <img src="/images/works/in-vehicle-multimodal-interaction/music-player.png" alt="In-vehicle music screen with playback controls, progress, lyrics, and a left-side function rail" loading="lazy" />
    <figcaption>04 / MEDIA — PLAYBACK AND LYRICS</figcaption>
  </figure>
</div>

<div class="project-feature">
  <div>
    <h3>Review vehicle settings</h3>
    <p>The short recording moves through service information, network connections, and vehicle status within the settings interface.</p>
  </div>
  <figure>
    <video controls playsinline preload="metadata" poster="/images/works/in-vehicle-multimodal-interaction/settings-poster.jpg" aria-label="Screen recording of the in-vehicle settings interface">
      <source src="/images/works/in-vehicle-multimodal-interaction/settings-demo.mp4" type="video/mp4" />
    </video>
    <figcaption>05 / SETTINGS — INTERFACE WALKTHROUGH</figcaption>
  </figure>
</div>

<div class="project-feature">
  <div>
    <h3>Separate access by role</h3>
    <p>Registration distinguishes drivers, passengers, maintenance staff, and administrators. The administrator view shown here includes user management, service status, and system logs.</p>
  </div>
  <figure>
    <img src="/images/works/in-vehicle-multimodal-interaction/administrator-view.png" alt="Administrator prototype showing user management, multimodal service status, system logs, and controls" loading="lazy" />
    <figcaption>06 / ADMINISTRATOR — USERS AND SERVICE STATUS</figcaption>
  </figure>
</div>

## Scope

The source material is a team presentation of a browser-based prototype, including interface screenshots and demonstrations. It documents proposed driving use cases and implemented modules but does not establish production vehicle integration, recognition accuracy, or user-tested safety improvements.
