import os
from moviepy.editor import VideoFileClip
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip
from uuid import uuid4

def main():
  path = "/home/spencer/Desktop/2Good2BTrue/backend/data/"
  videos = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f)) and f[-4:] == '.mp4']
  for vid in videos:
    hidden = vid[0]
    vid_path = os.path.join(path, vid)
    # cap = cv2.VideoCapture(vid_path)

    duration = int(VideoFileClip(vid_path).duration)
    for start in range(0, duration, 5):
      clip_name = path + 'clips/' + hidden + str(uuid4())[:8] + '.mp4'
      ffmpeg_extract_subclip(vid_path, start, start + 5, targetname=clip_name)

if __name__ == "__main__":
  main()
