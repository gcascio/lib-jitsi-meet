/**
 * Event triggered by a audio detector indicating that its active state has changed from active to inactive or vice
 * versa.
 * @event
 * @type {boolean} - true when service has changed to active false otherwise.
 */
export const DETECTOR_STATE_CHANGE = 'detector_state_change';

/** Event triggered by {@link NoAudioSignalDetector} when the local audio device associated with a JitsiConference
 * starts receiving audio levels with the value of 0 meaning no audio is being captured on that device, or when
 * it starts receiving audio levels !== 0 after being in a state of no audio.
 * @event
 * @type {boolean} - true when the current conference audio track has audio input false otherwise.
 */
export const AUDIO_INPUT_STATE_CHANGE = 'audio_input_state_changed';

/** Event triggered by NoAudioSignalDetector when the local audio device associated with a JitsiConference goes silent
 * for a period of time, meaning that the device is either broken or hardware/software muted.
 * @event
 * @type {void}
 */
export const NO_AUDIO_INPUT = 'no_audio_input_detected';

/**
 *  Event generated by {@link VADNoiseDetection} when the tracked device is considered noisy.
 *  @event
 *  @type {Object}
 */
export const VAD_NOISY_DEVICE = 'detection.vad_noise_device';

/**
 * Event generated by VADReportingService when if finishes creating a VAD report for the monitored devices.
 * The generated objects are of type Array<Object>, one score for each monitored device.
 * @event VAD_REPORT_PUBLISHED
 * @type Array<Object> with the following structure:
 * @property {Date} timestamp - Timestamp at which the compute took place.
 * @property {number} avgVAD - Average VAD score over monitored period of time.
 * @property {string} deviceId - Associate local audio device ID.
 */
export const VAD_REPORT_PUBLISHED = 'vad-report-published';

/**
 * Event generated by {@link TrackVADEmitter} when PCM sample VAD score is available.
 *
 * @event
 * @type {Object}
 * @property {Date}   timestamp - Exact time at which processed PCM sample was generated.
 * @property {number} score - VAD score on a scale from 0 to 1 (i.e. 0.7)
 * @property {Float32Array} pcmData - Raw PCM data with which the VAD score was calculated.
 * @property {string} deviceId - Device id of the associated track.
 */
export const VAD_SCORE_PUBLISHED = 'detection.vad_score_published';

/**
 *  Event generated by {@link VADTalkMutedDetection} when a user is talking while the mic is muted.
 *
 *  @event
 *  @type {Object}
 */
export const VAD_TALK_WHILE_MUTED = 'detection.vad_talk_while_muted';

/**
 * DetectionEvents Enum
 */
 export enum DetectionEvents {
    DETECTOR_STATE_CHANGE = 'detector_state_change',
    AUDIO_INPUT_STATE_CHANGE = 'audio_input_state_changed',
    NO_AUDIO_INPUT = 'no_audio_input_detected',
    VAD_NOISY_DEVICE = 'detection.vad_noise_device',
    VAD_REPORT_PUBLISHED = 'vad-report-published',
    VAD_SCORE_PUBLISHED = 'detection.vad_score_published',
    VAD_TALK_WHILE_MUTED = 'detection.vad_talk_while_muted'
};
