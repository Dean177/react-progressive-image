import React from 'react';
import { render } from 'react-dom';
import ProgressiveImage from '../progressive-image';

render(
                    // /test-image-small.jpg"
  <ProgressiveImage placeholderSrc="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QDSRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAExAAIAAAAQAAAAWodpAAQAAAABAAAAagAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMC42AAAEkAMAAgAAABQAAACgkAQAAgAAABQAAAC0kpEAAgAAAAM0MAAAkpIAAgAAAAM0MAAAAAAAADIwMTU6MTI6MTYgMTU6MjM6MjYAMjAxNToxMjoxNiAxNToyMzoyNgAAAP/bAEMAEgwNEA0LEhAOEBQTEhUbLB0bGBgbNicpICxAOURDPzk+PUdQZldHS2FNPT5ZeVphaW1yc3JFVX2GfG+FZnBybv/bAEMBExQUGxcbNB0dNG5JPklubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubv/AABEIABgAKgMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ANCTxJcFfk8gAHGQcn8s1i6vqUkt1YSEqxSff6ZPy/4VbW0v4iGS13H/AGZVPH4iszWvtCC1NxbSRsJBy20g8DgYPtVtx6GaTOkufEcpjCIYopJOBg7mX1OAaqWmqzWjDZeS3CvwwlBO3jgj0rBa8W41CJoogjKSFJbFTvLNMgTaCGYAKxHNYyfvK2xvBJxfcteKL2WeG1DlsMxYA/hTrayk+yxZt5T8g5x7ViajcCUQ4K8KcAdq6GPUYxGo+zWXAHV1rZeRg9jSgvY5JGQNyPw/nXPeKdVhudlvbkOI2yXHTPTAoorKK1NGYA6A9DXQeG4YJj5k2ZJUbgMxwoxxx+dFFKr8DKpfEVdQ04Q6xHCCrxyyKygdgWxius/svT/+fK3/AO/YoorO75Uxte8z/9k="
                    src="/test-image-large.jpg"
                    width="64em"
                    height="36em"/>,
  document.getElementById('root')
);
