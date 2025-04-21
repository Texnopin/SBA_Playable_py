using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MusicItemAdded : MonoBehaviour
{
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private AudioClip musicClip_coin;
    [SerializeField] private AudioClip musicClip_corn;
    [SerializeField] private AudioClip musicClip_popcorn;

    private void Awake()
    {
        GlobalEvents.OnAddCoinEvent.AddListener(MusicCoin);
        GlobalEvents.OnAddCornEvent.AddListener(MusicCorn);
        GlobalEvents.OnAddPopcornEvent.AddListener(MusicPopcorn);
    }

    public void MusicCoin()
    {
        if (musicSource.clip == musicClip_coin && musicSource.isPlaying) return;

        if (musicSource.clip == musicClip_coin && !musicSource.isPlaying)
        {
            musicSource.clip = musicClip_coin;
            musicSource.Play();
        }
        
    }
    public void MusicCorn()
    {
        if (musicSource.clip == musicClip_corn && musicSource.isPlaying) return;

        if (musicSource.clip == musicClip_corn && !musicSource.isPlaying)
        {
            musicSource.clip = musicClip_corn;
            musicSource.Play();
        }
        
    }
    public void MusicPopcorn()
    {
        if (musicSource.clip == musicClip_popcorn && musicSource.isPlaying) return;

        if(musicSource.clip == musicClip_popcorn && !musicSource.isPlaying)
        {
            musicSource.clip = musicClip_popcorn;
            musicSource.Play();
        }
        
    }


}
